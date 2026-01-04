import React from 'react'
import './WeddingInvitation.css'
import CountdownTimer from '../countdown/CountdownTimer'

const WeddingInvitation = () => {
  const centerItem = {
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    
  };
  return (
    <div className="calendar-container">
      <h1 style={{ fontFamily: "Oswald, Arial", lineHeight: "0.5" }}>
        INVITATION
      </h1>
      <h1 style={{ lineHeight: "0.1" }}>❧❧</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Oswald, Arial",
          // border: "1px solid black",
        }}
      >
        <div
          style={{
            ...centerItem,
            lineHeight: "0",
            width: "100%",
            gap: "20px",
            // border: "1px solid black",
            fontFamily: "Kdam Thmor Pro",
          }}
        >
          <div
            style={{
              textAlign: "start",
            }}
          >
            <h5>លោក ឈួន ឈឿន</h5>
            <h5>អ្នកស្រី ស៊ីម ស៊ុន</h5>
          </div>

          <div
            style={{
              textAlign: "start",
            }}
          >
            <h5>លោក ប្រុក ធា</h5>
            <h5>អ្នកស្រី ឡុង ស្រីម៉ៅ</h5>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "Moulpali" }}>មានកិត្តិយសសូមគោរពអញ្ជើញ</h3>
        </div>
        <h5
          style={{
            padding: " 0 30px",
            margin: "0",
            fontFamily: "Kdam Thmor Pro",
          }}
        >
          ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និង ប្រិយមិត្ត
          អញ្ជើញចូលរួមជាអធិបតី និង ជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីសួស្តី
          ជ័យមង្គលក្នុង ពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ
        </h5>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "1",
          gap: "20px",
          fontFamily: "Konkhmer Sleokchher",
        }}
      >
        <div style={{}}>
          <h4 style={{ fontFamily: "Kdam Thmor Pro" }}>កូនប្រុស</h4>
          <h2>ឈឺន​ ផាន់និត</h2>
        </div>
        <div>
          <h4 style={{ fontFamily: "Kdam Thmor Pro" }}>កូនស្រី</h4>
          <h2>ធុល ស្រីម៉ុច</h2>
        </div>
      </div>
      <h5 style={{ fontFamily: "Kdam Thmor Pro", padding: "0 30px", margin: "0"}}>
        ពិសារភោជនាហារប្រព្រឹត្តទៅនៅ ថ្ងៃសុក្រ ៥កើត ខែមាឃ ឆ្នាំម្សាញ់ សប្តស័ក
        ព.ស. ២៥៦៩ ត្រូវនឹងថ្ងៃទី ២៣ ខែមករា ឆ្នាំ២០២៦ វេលាម៉ោង ៥:០០
        នាទីល្ងាចស្ថិតនៅគេហដ្ឋានខាងស្រី ភូមិរំដួល ឃុំគរ ស្រុកព្រៃឈរ
        ខេត្តកំពង់ចាម ដោយមេត្រី <br />
        សូមអរគុណ!
      </h5>
      <h3 style={{ fontFamily: "Oswald, Arial", marginTop: "40px" }}>Wedding Date</h3>
      <div
        className="calendar-header"
        style={{ padding: "0 10px", fontSize: "13px" }}
      >
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
      <hr className="divider" />
      <div className="calendar-grid" style={{ padding: "0 10px" }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <span>01</span>
        <span>02</span>
        <span>03</span>

        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span>16</span>
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
        <span>22</span>
        <span className="active">23</span>
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span>30</span>
        <span>31</span>
      </div>
      <div style={{ padding: "20px 0px" }}>
        <CountdownTimer />
      </div>
    </div>
  );
}

export default WeddingInvitation