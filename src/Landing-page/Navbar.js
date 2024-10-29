import React from 'react'
function Navbar() {
    return ( 
        <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="logos" src="./images/logo.png" alt="logo" />
        </div>
        <div className="col-1"></div>
        <div className=" col-7">
          <ul className="nav">
            <li className="nav1  text-center ">Home</li>
            <li className="nav1  text-center ">Features</li>
            <li className="nav1  text-center ">Community</li>
            <li className="nav1  text-center ">Blog</li>
            <li className="nav1  text-center ">Pricing</li>
            <button style={{ backgroundColor: "#4CAF4F" }} className="nav1">
              Register Now
            </button>
          </ul>
        </div>
      </div>
    </div>
     );
}

export default Navbar;