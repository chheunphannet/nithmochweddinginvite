import React from 'react'
import './WeddingInvitation.css'
import CountdownTimer from '../countdown/CountdownTimer'

const WeddingInvitation = () => {
  return (
    <div className="calendar-container">
      <h1 style={{ fontFamily: "Oswald, Arial" }}>INVITATION</h1>
      <h2 style={{ fontFamily: "Caveat, Arial" }}>
        Chheun Phannith & Thol Sreymoch
      </h2>
      <h3 style={{ fontFamily: "Oswald, Arial" }}>Wedding Date</h3>
      <div className="calendar-header">
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
      <hr className="divider" />
      <div className="calendar-grid">
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