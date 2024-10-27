import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='mt-5 col-6 p-5'>
                    <h1 style={{fontSize:'70', fontFamily:'david libre',fontWeight:'bold'}} className='herohead'>We provide the <br/>
                    best food for you</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua.</p>
                    <button className='MenuButton  mt-5'>Menu</button>
                    <button style={{backgroundColor:'#EA6D27'}} className='BookButton'>Book a table </button>
                    
                 
                    <div className='icon mt-2 '>
                    <i  class="fa fa-facebook" aria-hidden="true"></i>
                    </div>
                    <div className='icon mt-2 '>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className='icon mt-2 '>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    
                    

                </div>
                <div style={{}} className='col-6 p-5 mt-5'>
                    <img className='Heroimg1' src='./images/Hero2img.png' alt='Heroimg'/>
                    <img className='Heroimg ' src='./images/Hero1img.png' alt='Heroimg'/>  
                    <img className='Heroimg2 ' src='./images/leftflr.png' alt='Heroimg'/>  
                    <img className='Heroimg3' src='./images/rightflr2.png' alt='Heroimg'/>  
                    <img className='Heroimg4 ' src='./images/rightflr3.png' alt='Heroimg'/>  

                </div>
               

               
                

            </div>

        </div>
     );
}

export default Hero;