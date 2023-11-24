import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer' >
        <div className='container'>
          <div className="row d-flex jsutify-content-center">
            <div className="col-lg-3 col-sm-6 pt-5 text-white text-center footer-text">
              <div className='text-center'>

                <i class="fa fa-shopping-cart fa-5x " aria-hidden="true"></i>
              </div>
              <h3>No Decision <br /> should be made <br /> on an empty <br /> shopping bag.</h3>
            </div>
            <div className="col-lg-3  col-sm-6 pt-5 usefull-links">

              <ul className=''>
                <h4 className='text-white'>UseFull Links</h4>
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Conatct</a></li>
                <li><a href='/cart'>Cart</a></li>


              </ul>

            </div>
            <div className="col-lg-3 col-sm-6 pt-5 ">
              <ul className=''>
                <h4 className='text-white pb-4'>Contact Us</h4>
                <li className='d-flex'> <i class="fa fa-mobile-phone fa-2x px-2" aria-hidden="true"></i><h6 className='text-white pt-1'>: +91 9380683319</h6></li>
                <li className='d-flex '><i class="fa fa-envelope fa-1x px-2 pt-2" aria-hidden="true"></i><h6 className='text-white pt-1'>: roopauppar@gmail.com</h6></li>
                <li className='d-flex '><i class="fa fa-home fa-1x px-2 pt-2" aria-hidden="true"></i><h6 className='text-white pt-1'>: Bangalore</h6></li>


              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 footer-icons ">
              <div className='d-flex'>
                <a href=''><i class="fa fa-facebook-square pe-4" aria-hidden="true"></i></a>
                <a href=''><i class="fa fa-instagram pe-4" aria-hidden="true"></i></a>
                <a href=''><i class="fa fa-google pe-4" aria-hidden="true"></i></a>
                <a href=''><i class="fa fa-youtube-play " aria-hidden="true"></i></a>
              </div>
             
            </div>
          </div>

        </div>

      </div>
      <div className='footer-end text-center'>
        <h5>Thank You</h5>
      </div>
    </>
  )
}

export default Footer