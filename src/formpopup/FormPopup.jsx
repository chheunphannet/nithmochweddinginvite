import React, { useEffect, useState } from 'react'
import './FormPopup.css'
import Qrcode from '../khqrcode/QRcode';

const FormPopup = ({ onClose, setShowModal }) => {
  const [isGenerateQr, setIsGenerateQr] = useState(false);
  const [showModalContainer, setshowModalContainer] = useState(true);
  const [isDisplayQr, setIsDisplayQr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    gender: "MALE",
    currency: "USD",
    amount: 0,
    note: "",
    side: "BOY",
  });
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitting Data:", formData);
    const validationError = validationForm(formData);
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      setshowModalContainer(false);
      setIsLoading(true);
      setIsGenerateQr(true);
      setIsDisplayQr(true);
    }
  };

const handleOnChanged = (e) => {
  const { name, value } = e.target;

  if (name === "amount") {
    if (formData.currency === "USD") {
      const usdRegex = /^\d*\.?\d{0,2}$/;
      if (value !== "" && !usdRegex.test(value)) {
        return;
      }
    }

    if (formData.currency === "KHR") {
      const khrRegex = /^\d*$/;
      if (value !== "" && !khrRegex.test(value)) {
        return;
      }
    }
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const validationForm = (data) => {
  let errors = {};

  if (!data.name) {
    errors.name = "សូមបំពេញឈ្មោះរបស់អ្នក";
  }

  if (!data.amount) {
    errors.amount = "សូមបំពេញចំនួនទឹកប្រាក់";

  } else if(parseFloat(data.amount) <= 0){
    errors.amount = "ចំនួនទឹកប្រាក់មិនត្រឺមត្រូវ";

  } else {
    const amountNum = parseFloat(data.amount);

    if (data.currency === "USD") {
      if (
        (amountNum < 0.01 || amountNum >= 10000) 
      ) {
        errors.amount = "ចំនួនទឹកប្រាក់មិនត្រឺមត្រូវ";
      }
    } else if (data.currency === "KHR") {
      if (
        (amountNum < 100 ||
        amountNum >= 40000000 ||
        !Number.isInteger(amountNum)) 
      ) {
        errors.amount = "ចំនួនទឹកប្រាក់មិនត្រឺមត្រូវ";
      }
    }
  }

  return errors;
};

  const handleQrDisplay = () => {
    setIsDisplayQr(false);
    setshowModalContainer(true);
  };

  return (
    <div className="modal-bg">
      <div
        className="modal-container"
        style={{
          display: !showModalContainer && "none",
        }}
      >
        <div className="form-header">
          <h4>បំពេញដើម្បីចងដៃតាមរយៈ QRCODE</h4>
          <i onClick={onClose} className="ri-close-fill"></i>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>ឈ្មោះពេញ</label>
              <input
                type="text"
                name="name"
                onChange={handleOnChanged}
                value={formData.name}
              />
              {errors.name && (
                <span
                  style={{ fontWeight: "500", color: "red", fontSize: "15px" }}
                >
                  {errors.name}
                </span>
              )}
            </div>
            <div className="group-input">
              <div className="form-control">
                <label>ភេទ</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleOnChanged}
                >
                  <option value="MALE">ប្រុស</option>
                  <option value="FEMALE">ស្រី</option>
                </select>
              </div>
              <div className="form-control">
                <label>ចងដៃខាង</label>
                <select
                  name="side"
                  value={formData.side}
                  onChange={handleOnChanged}
                >
                  <option value="BOY">ខាងប្រុស</option>
                  <option value="GIRL">ខាងស្រី</option>
                </select>
              </div>
            </div>
            <div className="group-input">
              <div className="form-control">
                <label>ចំនួនទឺកប្រាក់</label>
                <input
                  type="text"
                  inputMode={
                    formData.currency === "USD" ? "decimal" : "numeric"
                  }
                  name="amount"
                  onChange={handleOnChanged}
                  value={formData.amount}
                />
                {errors.amount && (
                  <span
                    style={{
                      fontWeight: "500",
                      color: "red",
                      fontSize: "15px",
                    }}
                  >
                    {errors.amount}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label>រូបិយប័ណ្ណ</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleOnChanged}
                >
                  <option value="USD">$</option>
                  <option value="KHR">៛</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label>មតិ</label>
              <textarea
                name="note"
                maxLength="200"
                onChange={handleOnChanged}
                value={formData.note}
              />
            </div>
            <button type="submit" className="submit-btn">
              បន្តទៅបង្កើត QRCODE
            </button>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className="loading">
          <lord-icon
            src="https://cdn.lordicon.com/flabvqvs.json"
            trigger="loop"
            colors="primary:#ffffff"
            style={{ width: "80px", height: "80px" }}
          ></lord-icon>
        </div>
      )}
      {isDisplayQr && (
        <div className="modal-qr">
          <Qrcode
            BASE_URL={BASE_URL}
            individual={formData}
            isGenerateQr={isGenerateQr}
            setIsGenerateQr={setIsGenerateQr}
            handleQrDisplay={handleQrDisplay}
            setShowModal={setShowModal}
            setIsDisplayQr={setIsDisplayQr}
            setIsLoading={setIsLoading}
          />
        </div>
      )}
    </div>
  );
};

export default FormPopup