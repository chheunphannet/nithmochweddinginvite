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
      <h1 style={{ fontFamily: "Oswald, Arial", lineHeight: "0" }}>
        INVITATION
      </h1>
      <h1 style={{lineHeight: "0.1" }}>❧❧</h1>
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
          }}
        >
          <div
            style={{
              textAlign: "start",
            }}
          >
            <h5>MR. CHHUON CHHEUN</h5>
            <h5>MRS. SIM SUN</h5>
          </div>
          <div
            style={{
              textAlign: "start",
            }}
          >
            <h5>MR. BROK THEA</h5>
            <h5>MRS. LONG SREYMAO</h5>
          </div>
        </div>
        <h6 style={{ padding: "0", margin: "0" }}>
          CORDIALLY REQUEST THE HONOR OF YOUR PRESENCE ON THE AUSPICIOUS
          OCCASION OF THE WEDDING OF OUR CHILDREN.
        </h6>
      </div>

      <h2 style={{ fontFamily: "Great Vibes, Arial" }}>
        Chheun Phannith & Thol Sreymoch
      </h2>
      <h3 style={{ fontFamily: "Oswald, Arial" }}>Wedding Date</h3>
      <div className="calendar-header" style={{ padding: "0 10px" }}>
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