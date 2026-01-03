import React from 'react'
import { useState } from 'react'
import './Location.css'
const Location = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Oswald, Arial",
          color: "#555",
        }}
      >
        Location
      </h1>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Caveat, Arial",
          color: "#555",
        }}
        className="location-info"
      >
        At The Bride's House, At Romduol Village, Kor Commune,
        <br />
        Prey Chhor District, Kampong Cham Province.
      </p>
      <div style={{ width: "100%", height: "300px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3733.5149149115296!2d105.2259806748081!3d12.102421933338562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA2JzA4LjciTiAxMDXCsDEzJzQyLjgiRQ!5e1!3m2!1sen!2skh!4v1767369189251!5m2!1sen!2skh"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "0" }}
        />
        <div
          style={{
            marginTop: "10px",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "#30A952",
            width: "fit-content",
            height: "fit-content",
          }}
          className="clickable-div"
        >
          <a
            style={{
              background: "none",
              color: "#ffffffff",
              textDecoration: "none",
              fontFamily: "Oswald, Arial",
              fontSize: "13px",
            }}
            href="https://maps.app.goo.gl/FNqNya6tjHaqjXTZ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Google Maps{" "}
            <i style={{ background: "none" }} className="ri-map-pin-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Location