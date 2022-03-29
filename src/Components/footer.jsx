import React from 'react'

function footer() {
  return (
    <footer>
        <div className="footer_innneritm">
            <div className="container">
                <div className="footer_inner">
                    <div className="footer_itm">
                        <h4>ADDRESS</h4>
                        <p>Unit 1, Trinity Enterprise Centre, <br/>Ironworks Rd, Barrow-in-Furness LA14 2PN</p>
                    </div>
                    <div className="footer_itm">
                        <h4>CONTACT US</h4>
                        <p>Email: <a href="mailto:hotel@domain_name.com">hotel@resortandspahotel.com</a></p>
                        <p>Phone: <a href="tel:+441200445581">+441229520250</a></p>
                    </div>
                    <div className="footer_itm">
                        <h4>18+ ONLY</h4>
                        <p>The hotel guests must be at least 18 years old to visit  <br/>Resort and SPA Hotel</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyrights">
            <div className="container">
               © 2022 RESORT &amp; SPA HOTEL, ALL RIGHTS RESERVED
            </div>
        </div>
    </footer>
  )
}

export default footer