import React from "react";
function Menu() {
  return (
    <div className="container p-5">
      <div className="mt-5">
        <h1 style={{ fontFamily:'david libre',fontWeight:'bold'}} className="text-center">Our Special Dishes</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor incididunt{" "}
        </p>
      </div>
      <div className="menurow p-5 mt-5">
        <div></div>
        <div>
          <img className="menu1" src="./images/Menuimg1.png" alt="" />
        </div>
        <div className="menuparent  ">
          <div className="menucard col-3">
            <h5 className="menuhead text-center">Lumpia with Suace</h5>
            <p style={{ color: "#5C6574" }} className="text-center">
              Lorem ipsum dolor sit
              <br /> , consectetur adipiscing elit, sed <br />
              do eiusmod tempor{" "}
            </p>
          </div>
          <div>
          <img className="menu2" src="./images/Menuimg2.png" alt="" />
        </div>
          <div className="menucard col-3">
            <h5 className="menuhead text-center">Lumpia with Suace</h5>
            <p style={{ color: "#5C6574" }} className="text-center">
              Lorem ipsum dolor sit
              <br /> , consectetur adipiscing elit, sed <br />
              do eiusmod tempor{" "}
            </p>
          </div>
          <div>
          <img className="menu3" src="./images/Menuimg3.png" alt="" />
        </div>
          <div className="menucard col-3">
            <h5 className="menuhead text-center">Lumpia with Suace</h5>
            <p style={{ color: "#5C6574" }} className="text-center">
              Lorem ipsum dolor sit
              <br /> , consectetur adipiscing elit, sed <br />
              do eiusmod tempor{" "}
            </p>
          </div>
          <div>
          <img className="menu4" src="./images/Menuimg4.png" alt="" />
        </div>
          <div className="menucard col-3">
            
            <h5 className="menuhead text-center">Lumpia with Suace</h5>
            <p style={{ color: "#5C6574" }} className="text-center">
              Lorem ipsum dolor sit
              <br /> , consectetur adipiscing elit, sed <br />
              do eiusmod tempor{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
