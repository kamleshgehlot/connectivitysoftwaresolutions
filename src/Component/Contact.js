import React, { Component } from 'react';
// import APIs from '../api/APIs.js'

import APIs from '../api/APIs.js'

const handleSendMail = async (e) => {
  e.preventDefault();
  try{
    const result = await APIs.sendMail({
      name: document.getElementById('name').value,
      mobile: document.getElementById('mobile').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    });
    if(result === true){
      document.getElementById('name').value = '';
      document.getElementById('mobile').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      alert('Mail sent successfully.');
    }
  }catch(e){
    console.log(e);
  }
}

export default class Contact extends Component {
    render()
  
    {
     
        return(
    
            <div id ="Contact">
            
            <main>
            <div className="wantToWork-area w-padding" >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="wantToWork-caption">
                
                <h2>Contact Us</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-5 col-md-4">
              <div className="wantToWork-btn f-right">
                {/* <a href="#" className="btn btn-ans">view more</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
              <section className="contact-section">
              
                <div className="container">
                
                  <div className="d-none d-sm-block mb-5 pb-4">
                  <section className="footer-bottom" id="contact" style={{backgroundColor: '#C5E4E7'}}>
          <div className="address_mail_footer_grids">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8325782473903!2d72.9663536142447!3d26.26709659390901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418eed1808825d%3A0xe3c17343a3bfb6bf!2s11%2C%20Chopasani%20Rd%2C%20Sector%2016%2C%20Chopasni%20Housing%20Board%2C%20Jodhpur%2C%20Rajasthan%20342008!5e0!3m2!1sen!2sin!4v1595738808113!5m2!1sen!2sin" style={{width:'100%',height:'500px'}} />
             </div>
        </section>
                
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h2 className="contact-title">Get in Touch</h2>
                    </div>
                    <div className="col-lg-8">
                      <form className="form-contact contact_form"  onSubmit={handleSendMail}>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9} onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message" defaultValue={""} required />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input className="form-control valid" name="name" id="name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" type="text" required />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <input className="form-control valid" name="email" id="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" type="email" required />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <input className="form-control" name="mobile" id="mobile" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter mobile'" placeholder="Enter Subject" type="number" required/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <button type="submit" value="Send Message"  className="button button-contactForm boxed-btn">Send</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-home" /></span>
                        <div className="media-body">
                        
                         
                          <h3>11/822, Chopasani Housing Board, </h3>
                          <p>Jodhpur, Rajsthan -342001</p>
                        </div>
                      </div>
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-tablet" /></span>
                        <div className="media-body">
                          <h3>+91 94622 80992</h3>
                          <p>Mon to Fri 9am to 6pm</p>
                        </div>
                      </div>
                      <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-email" /></span>
                        <div className="media-body">
                          <h3>connectivitysoftwaresol@gmail.com</h3>
                          <p>Send us your query anytime!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ================ contact section end ================= */}
            </main>
          
          </div>
          
    )
    }
    }