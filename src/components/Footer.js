import React from 'react'
import './footer.css'
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
    return (
        <div className='footbgtech'>
            <div class="container text-center">
                <div class="row">
                    <div class="col-4">
                        <h1 className='parastart'>Tools</h1>
                        <p className='parastart'>Lorem ipsum dolor sit amet consectetur. Vel eget massa<br/> ac at elementum vitae molestie eu dapibus. Blandit vitae <br/>cras purus non lectus mattis pretium. Maecenas blandit<br/> tortor at euismod ullamcorper nibh lectus at habitant<br/> Metus gravida habitant vulputate at magnis bibendum</p>
                    </div>
                    <div class="col-2">
                        <div className='parastart'>
                        <h5>INFORMATION</h5>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Blogs</p>
                        <p>Terms and condition</p>
                        </div>
                        
                    </div>
                    <div class="col-2">
                    <div className='parastart'>
                        <h5>POLICIES</h5>
                        <p>Privacy policy</p>
                        <p>payment policy</p>
                        <p>pricing policy</p>
                        <p>Return policy</p>
                        <p>shiping policy</p>
                        </div>
                    </div>
                    <div class="col-4">
                    <div className='parastart'>
                        <h5>CONTACT US</h5>
                        <p><CiLocationOn />Ai Muhammadya,Darmam,Saudi Arabia</p>
                        <p> <CgMail />Hello2025@gmail.com</p>
                        <p><IoMdTime />mon-friday 10.00AM to 7.00PM</p>
                       
                        </div>
                    </div>
                </div>
               
                </div>
                <div className='ml'>
                    <h3>Foloow us</h3>
                    <label className='sociallog'><FaFacebook /></label>
                    <label className='sociallog'><FaInstagramSquare /></label>
                    <label className='sociallog'> <FaSquareXTwitter /></label>
                    <label> <CiLinkedin /></label>
                </div>
                <hr></hr>
                <h5 className='text-center'>copy rights reserved tool 2025</h5>
                
               
            </div>
        
  )
}

export default Footer
