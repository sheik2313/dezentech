import React from 'react'
import './first.css'
// import Navbar from './Navbar'

function First() {
    return (

        <div>
            {/* <Navbar/> */}
            <div className='firstpagedivone'>
                <h1><span className='price'>PRECISE </span>PROJECT PLANNING<br /><span className='price'>MODERN </span>DESIGN<br /><span className='price'>SATISFYING</span> RESULTS</h1>
                <button className='firstpagebutton'>Shop now</button>

            </div>

            <div className='firstpagebottom'>

                <label className='firstplab'>Free Delivery Above 300 SAR</label>
                <label className='firstplab'>Safe And Secure Payment</label>
                <label className='firstplab'>Express Shiping And 7 days Delivery</label>
                <label >Easy Installments And Upto 5000 SAR</label>


            </div>
            <div className='secondpagehead'>
                <h3 className='productshead'>| products</h3>
                <p>choose from the wide range of products that we offer for your needs</p>
                <div className='cardlistone'>
                    <label>cardless tools-others</label>
                    <label className='cardlabelone'>hameer drill/demolition</label>
                    <label className='cardlabelone'>vardless tools-others</label>
                    <label className='cardlabelone'>cardless tools 20v-one power</label>
                    <label className='cardlabelone'>hameer drill/demolition</label>
                </div>
                <div className='cardlisttwo'>
                <label>cardless tools-others</label>
                    <label className='cardlabelone'>hameer drill/demolition</label>
                    <label className='cardlabelone'>vardless tools-others</label>
                    <label className='cardlabelone'>cardless tools 20v-one power</label>
                    <label className='cardlabelone'>hameer drill/demolition</label>
                </div>

            </div>




        </div>
    )
}

export default First
