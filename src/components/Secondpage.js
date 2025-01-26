import React from 'react'
import './secondpage.css'
import Navbar from './Navbar'
import First from './First'
import Cardpage from './Cardpage'
import Footer from './Footer'


function Secondpage() {
    return (
        <div>
            <Navbar />
            <First />
            <Cardpage />
            <div >
                <div className='secondpagebag'>
                    <h1>TOOLS</h1>
                    <h1 className='secondh'><span className='word'>Words </span>From Our Founder</h1>
                    <p className='secondh'>" Lorem ipsum dolor sit amet consectetur. Consectetur purus ac enim sed at felis purus. Pulvinar aliquam sit ac ornare<br />
                        varius vulputate congue maecenas imperdiet. Ullamcorper varius fames a ullamcorper tempus in pulvinar. Tincidunt<br />
                        donec nisi pellentesque nascetur etiam. Dictum. augue proin tellus ac sit suscipit posuere pharetra non. Suspendisse<br />
                        maecenas massa vitae mi malesuada scelerisque</p>

                    <p className='secondh'>  Ipsum gravida aliquam enim tortor nunc leo risus. Vestibulum consequat felis integer non nibh egestas<br />
                        Lorem ipsum dolor sit amet consectetur. Consectetur purus ac enim sed at felis purus. Pulvinar aliquam sit ac omare<br />
                        varius vulputate congue maecenas imperdiet. Ullamcorper varius fames a ullamcorper tempus in pulvinar. Tincidunt<br />
                        donec nisi pellentesque nascetur etiam. Dictum augue</p>
                </div>
            </div>
            <div className='subdiv'>
                <h3>Subscribe To the latest update on the time</h3>
                <input className='subinput' type='text' placeholder='Enter your adress' />
                <div className='sublable'>
                <label >for sales enquiry</label>
                <label className='sublab'>+91 7898987654</label>
                <label className='sublab'>hello2025@gmail.com</label>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Secondpage
