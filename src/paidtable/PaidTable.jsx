import React, { useEffect, useState } from 'react'
import "./PaidTable.css"

const PaidTable = ({ baseUrl }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getAllPaidUsers = async () => {
      try {
        const endPoint = `${baseUrl}/all/paid`;
        const response = await fetch(endPoint, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        } 

        const data = await response.json();
        setRows(data);

      } catch (error) {
        console.error("Fail get all paid guest!" + error);
      }
    };

    getAllPaidUsers();
  }, [baseUrl]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>តារាងភ្ញៀវដែលបានចងដៃ</h3>
      <div className="scrollable-table">
        <table className="table">
          <thead>
            <tr>
              {headerName.map((value, index) => (
                <th key={index}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody style={{ fontFamily: "Battambang" }}>
            {rows.map((res, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{res.user.name}</td>
                <td>{res.user.gender === "MALE" ? "ប្រុស" : "ស្រី"}</td>
                <td>
                  {res.user.chongdiaSide === "BOY" ? "ខាងប្រុស" : "ខាងស្រី"}
                </td>
                <td>{`${res.amount}${res.currency === "USD" ? "$" : "៛"}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const headerName = ["ល/រ", "ឈ្មោះ", "ភេទ", "ខាង", "ចំនួន"];

export default PaidTable