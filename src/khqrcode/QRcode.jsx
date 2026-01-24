import React, { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import './Qrcode.css'

const KHQRCode = ({ qrString, currency, amount, seconds, handleQrDisplay }) => {
  if (!qrString) return <p>No QR data available</p>;
  const logoSrc = currency === "USD" ? "/images/usd.png" : "/images/riel.png";
  return (
    <div className="bg-qr">
      <div className="close">
        <i onClick={handleQrDisplay} className="ri-close-line"></i>
      </div>
      <h3 style={{ lineHeight: "1", fontWeight: "normal" }}>{`${amount} ${
        currency === "USD" ? "ដុល្លា" : "រៀល"
      }`}</h3>
      <QRCodeSVG
        style={{ borderRadius: "10px", border: "3px dashed #ddd" }}
        value={qrString}
        size={250} // Size in pixels
        bgColor={"#ffffff"} // Background color
        fgColor={"#000000"} // QR code color
        level={"H"} // High error correction
        includeMargin={true}
        imageSettings={{
          src: logoSrc,
          x: undefined,
          y: undefined,
          height: 50,
          width: 50,
          excavate: false, // This cuts a hole in the QR for the logo
        }}
      />
      <div className="time-expired-message">
        <p>ពេលវេលាដែលនៅសល់: {seconds}s</p>
        {seconds === 0 && <p style={{ color: "red" }}>QRCODE បានផុតកំណត់</p>}
      </div>
    </div>
  );
};

function usePaidUserSSE(onPaid, baseUrl, md5) {
  useEffect(() => {
    if (!md5) return;

    console.log("Attempting SSE connection for MD5:", md5);
    const es = new EventSource(`${baseUrl}/v2/new-paid-users`);

    es.addEventListener("paid-user", (e) => {
      console.log("Event received:", e.data);
      try {
        const data = JSON.parse(e.data);

        if (data.md5 === md5) {
          console.log("Payment confirmed for:", md5);
          onPaid(data);
          es.close();
        }
      } catch (err) {
        console.error("Error parsing SSE JSON:", err);
      }
    });

    es.onerror = (err) => {
      console.error("SSE error", err);
    };

    return () => {
      console.log("Closing SSE connection");
      es.close();
    };
  }, [baseUrl, md5, onPaid]); // Re-run only if md5 changes
}

function Qrcode({
  BASE_URL,
  individual,
  isGenerateQr,
  setIsGenerateQr,
  handleQrDisplay,
  setIsDisplayQr,
  setShowModal,
  setIsLoading,
}) {
  const [qrResponse, setQrResponse] = useState({
    data: { qr: "", md5: "" },
    khqrstatus: { code: 1 },
  });

  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePaymentSuccess = useCallback((data) => {
    console.log("Payment callback triggered!", data);
    setIsPaid(true);
    setIsCounting(false); // Stop timer
  }, []);

  usePaidUserSSE(handlePaymentSuccess, BASE_URL, qrResponse?.data?.md5);

  useEffect(() => {
    if (!isGenerateQr) return;

    const genereateQrCode = async () => {
      try {
        setIsPaid(false);

        const response = await fetch(`${BASE_URL}/generate-khqr`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(individual),
        });

        const data = await response.json();

        if (data.khqrstatus.code === 0) {
          setQrResponse(data);
          setSeconds(120);
          setIsCounting(true);
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
      } finally {
        setIsGenerateQr(false);
        setIsLoading(false);
      }
    };

    genereateQrCode();
  }, [isGenerateQr, BASE_URL, individual]);

  useEffect(() => {
    let interval = null;
    if (isCounting && seconds > 0) {
      interval = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    } else if (seconds === 0) {
      setIsCounting(false);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isCounting, seconds]);

  const handleClosePaid = () => {
    setIsPaid(false);
    setIsDisplayQr(false);
    setShowModal(false);
  };

  return (
    <div className="qr-paid-modal">
      {isPaid && (
        <div className="success-message-container">
          <div className="close">
            <i onClick={handleClosePaid} className="ri-close-line"></i>
          </div>
          <div className="paid-anime">
            <lord-icon
              src="https://cdn.lordicon.com/zdfcfvwu.json"
              trigger="loop"
              colors="primary:#66ee78"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
          </div>
          <div className="success-message">
            <h3>ចងដៃទទួលបានជោគជ័យ!</h3>
            <p>អរគុណដែលបានចូលរួមកម្មវិធីពួកយើងទាំងពីរ</p>
          </div>
        </div>
      )}

      {qrResponse?.khqrstatus?.code === 0 && !isPaid && (
        <KHQRCode
          qrString={qrResponse.data.qr}
          currency={individual.currency}
          amount={individual.amount}
          seconds={seconds}
          handleQrDisplay={handleQrDisplay}
        />
      )}
    </div>
  );
}

export default Qrcode;