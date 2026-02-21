import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bgImage from "/images/IMG_2261.JPG";
import bgName from "/images/nithmochname.png";
import DropDown from "./dropdown/DropDown";
import Letter from "./letter/Letter";
import insideLetter from "/images/insideletter.png";
import coverImage from "/images/IMG_2256.JPG";
import backCover from "/images/IMG_2244.jpg";
import WeddingInvitation from "./invitationcard/WeddingInvitation.jsx";
import Location from "./location/Location.jsx";
import TrandingSlider from "./gallery/TrandingSlider.jsx";
import { useSearchParams } from "react-router-dom";
import FormPopup from "./formpopup/FormPopup.jsx";
import PaidTable from "./paidtable/PaidTable.jsx";

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState("");
  const [fontSize, setFontSize] = useState(13);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const name = searchParams.get("name");
    const size = searchParams.get("size");

    if (name) setGuestName(name);
    if (size) setFontSize(Number(size));
  }, [searchParams]);

  return (
    <div className="mobile-app">
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            background: "transparent",
            borderRadius: "10px",
          }}
        >
          <DropDown />
          <h3
            style={{
              background: "none",
              color: "#000000ff",
              fontFamily: "Moulpali, Arial",
              lineHeight: "0",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            សិរីមង្គលអាពាហ៏ពិពាហ៏
          </h3>
          <div class="spacer"></div>
        </div>
      </header>
      <main>
        <div
          className="start-image"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 1%, transparent 30.0%),
            linear-gradient(to top, rgba(0, 0, 0, 0.5) 1%, transparent 20.0%),
            url(${bgImage})`,
            // backgroundImage: `linear-gradient(to top, #ffffffff 1%, transparent 20.0%), url(${bgImage})`,
          }}
        >
          <img
            src={bgName}
            alt="Nithmoch Name"
            style={{
              width: "80%",
              height: "auto",
              background: "none",
            }}
          />
          <div
            style={{
              marginTop: "13.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <h1
              style={{
                lineHeight: "0",
                background: "none",
                fontSize: "18px",
                color: "#ffffffff",
                fontFamily: "Moulpali, Arial",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              សូមគោរពអញ្ចើញ
            </h1>
            <div
              style={{
                backgroundImage: `url('/images/guest-name-gold-shadow.png')`,
                backgroundColor: "transparent",
                width: "200px",
                height: "100px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginTop: "0px",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="guest-name"
            >
              <h3
                style={{
                  fontFamily: "Kdam Thmor Pro, Arial",
                  fontSize: `${fontSize + "px"}`,
                  color: "#ffffffff",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                  background: "transparent",
                }}
              >
                {guestName}
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
          }}
          id="Date"
        >
          <WeddingInvitation />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 0",
            gap: "20px",
            backgroundColor: "#ffffffff",
          }}
        >
          <h2
            style={{
              fontFamily: "Oswald, Arial",
              background: "none",
              color: "#555",
              margin: "0",
            }}
          >
            Wedding Ceremony Program
          </h2>
          <h3
            style={{ margin: "0", color: "#555", fontFamily: "Kdam Thmor Pro" }}
          >
            កម្មវិធីសិរីមង្គលអាពាហ៏ពិពាហ៏
          </h3>

          <div id="Program">
            <Letter
              insideLetter={insideLetter}
              cover={coverImage}
              backCover={backCover}
            />
          </div>

          <p
            style={{
              fontFamily: "Oswald, Arial",
              background: "none",
              color: "#555",
              fontSize: "12px",
              margin: "0",
            }}
          >
            Click to see Wedding Ceremony Program
          </p>
          <p
            style={{
              margin: "0",
              lineHeight: "0.5",
              color: "#555",
              fontFamily: "Kdam Thmor Pro",
              fontSize: "12px",
            }}
          >
            ចុចលើរូបដើម្បីមើលកម្មវិធីសិរីមង្គលអាពាហ៏ពិពាហ៏
          </p>
        </div>
        <div id="Photo">
          <TrandingSlider />
        </div>
        <div id="payments">
          <h2>ចងដៃតាមរយៈ QR CODE</h2>

          <div className="heart-btn">
            {/* <h2>ចងដៃតាមរយៈ QR CODE</h2> */}
            <lord-icon
              src="https://cdn.lordicon.com/hsabxdnr.json"
              trigger="loop"
              state="morph-select"
              colors="primary:#ee66aa"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>

            <button className="jongdia" onClick={() => setShowModal(true)}>
              ចងដៃ
            </button>
          </div>

          <div className="img-bg-name">
            <div className="control-bg-img-boy">
              <div
                style={{ backgroundImage: `url("/images/bgboy.JPG")` }}
                className="boy"
              ></div>
              <h3 style={{ margin: "0" }}>ឈឺន ផាន់និត</h3>
            </div>
            <div className="control-bg-img-girl">
              <h3 style={{ margin: "0" }}>ធុល ស្រីម៉ុច</h3>
              <div
                style={{ backgroundImage: `url("/images/bggirl.JPG")` }}
                className="girl"
              ></div>
            </div>
          </div>

          <div className="data_table">
            <PaidTable baseUrl={baseUrl} />
          </div>

          {showModal && (
            <FormPopup
              onClose={() => setShowModal(false)}
              setShowModal={setShowModal}
            />
          )}

          {/* <p style={{ fontSize: "12px" }}>ចុចដើម្បីចងដៃតាមរយៈ QR CODE</p> */}
        </div>
        <div style={{ paddingBottom: "40px" }} id="Location">
          <Location />
        </div>
      </main>
      <footer
        style={{
          paddingTop: "40px",
          textAlign: "center",
          background: "none",
          color: "#555",
          fontFamily: "Oswald",
        }}
      >
        <p style={{ background: "none", padding: "0 20px", fontSize: "10px" }}>
          Thank you! <br /> to everyone who joined us for our wedding!
          <br /> We are so happy to share these memories with you.
        </p>
        <div
          style={{
            backgroundColor: "#555",
            width: "100%",
            height: "25.0px",
            marginTop: "40px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              background: "none",
              color: "#ddd",
              fontFamily: "Oswald, Arial",
              fontSize: "10px",
            }}
          >
            Design By Phanet
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
