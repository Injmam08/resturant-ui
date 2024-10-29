import React from "react";
function bookingchef() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-7 p-5 mt-5">
          <h1 style={{fontFamily:'david',fontWeight:'bold'}} className="p-5">Our Expects Chef</h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor incididunt
            <br /> ut labore et dolore magna aliqua.
          </p>
          <div className="listborder " style={{ display: "flex" }}>
            <ul className="list">
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                consectetur{" "}
              </li>
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                 consectetur{" "}
              </li>
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                 consectetur{" "}
              </li>
            </ul>
            <ul className="list">
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                consectetur{" "}
              </li>
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                 consectetur{" "}
              </li>
              <li className="lists" style={{ listStyle: "none" }}>
                <i
                  style={{ backgroundColor: "#EA6D27" }}
                  class="fa fa-check"
                  aria-hidden="true"
                ></i>
                Lorem ipsum dolor sit amet,
                 consectetur{" "}
              </li>
            </ul>
          </div>
          <button className='BookButton  mt-5'>Menu</button>
                    <button style={{backgroundColor:'#EA6D27'}} className='BookButton'>Book a table </button>
                    
        </div>
        <div className="col-5">
          <img className="chefimg" src="./images/chef.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default bookingchef;
