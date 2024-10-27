import React from 'react'
function Booking() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img className='booking' src='./images/Bookimg.png' alt=''/>

                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1  style={{fontFamily:'david', marginLeft:'20px'}}>Wecome to Our Restaurant</h1>
                    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt <br/>ut labore et dolore magna aliqua.</p>
                    <button className='BookButton  mt-5'>Menu</button>
                    <button style={{backgroundColor:'#EA6D27'}} className='BookButton'>Book a table </button>
                    

                </div>

            </div>

        </div>
     );
}

export default Booking;