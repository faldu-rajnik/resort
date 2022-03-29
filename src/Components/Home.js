import React from 'react'
import accomodation from '../img/accomodation.png';
import accomodationw from '../img/accomodation.webp';
import wellnesw from '../img/wellnes.webp';
import wellnes from '../img/wellnes.png';
import beachw from '../img/beach.webp';
import beach from '../img/beach.png';
import fitnessw from '../img/fitness.webp';
import fitness from '../img/fitness.png';
import meetingsw from '../img/meetings.webp';
import meetings from '../img/meetings.png';
import restaurantsw from '../img/restaurants.webp';
import restaurants from '../img/restaurants.png';
import entertainmentsw from '../img/entertainments.webp';
import entertainments from '../img/entertainments.png';
import casinow from '../img/casino.webp';
import casino from '../img/casino.png';
function Home() {
  return (
      <>
    <section className="hotel_facilityy" id="facilities">
        <div className="container">
            <h2 className="sec_heading">
                HOTEL FACILITIES
            </h2>
            <p className="facility_desc">
                Looking for a luxurious getaway that will pamper you from head to toe? Look at our Resort&amp;SPA hotel! Our world-className facilities include a SPA, casino, and fitness center, as well as restaurants and bars. Whether you're looking to relax or get in shape, our hotel is the perfect place to do it!
            </p>
            <div className="facility_grid">
                <div className="grid_items">
                    <picture>
                      <source srcSet={accomodationw } type="image/webp"/>
                      <img alt="resort_spa" src={accomodation}/>
                    </picture>
                    <div className="grid_head">
                        Accomodation
                    </div>
                    <div className="grid_desc">
                        Our accommodations will make you feel at home while you're away from home. Whether you're traveling for business or pleasure, we have just what you need. Book now and enjoy your stay!<br/><br/>
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={wellnesw } type="image/webp"/>
                      <img alt="resort_spa" src={wellnes}/>
                    </picture>
                    <div className="grid_head">
                        Wellnes &amp; SPA
                    </div>
                    <div className="grid_desc">
                        Looking to relax and rejuvenate? Our hotel SPA is the perfect destination. From soothing massages to invigorating facials, we have something for everyone. So come in and let us take care of you!
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={beachw } type="image/webp"/>
                      <img alt="resort_spa" src={beach}/>
                    </picture>
                    <div className="grid_head">
                        Beach
                    </div>
                    <div className="grid_desc">
                        Our hotel beach is perfect for those who want to relax in peace and privacy. Enjoy the quiet sound of waves crashing against the shore while you sunbathe on our pristine sand beaches.
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={fitnessw } type="image/webp"/>
                      <img alt="resort_spa" src={fitness}/>
                    </picture>
                    <div className="grid_head">
                        Fitness Center
                    </div>
                    <div className="grid_desc">
                        Looking to stay fit on your vacation? Our gym has everything you need to get in a good workout, including treadmills, elliptical machines, and weight machines. So come on in and get fit!
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={meetingsw } type="image/webp"/>
                      <img alt="resort_spa" src={meetings}/>
                    </picture>
                    <div className="grid_head">
                        Meetings &amp; Events
                    </div>
                    <div className="grid_desc">
                        Bring your business meetings to life at our hotel conference center. Our state-of-the-art facilities and professional staff will ensure that everything goes smoothly, from planning to execution. <br/><br/>
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={restaurantsw } type="image/webp"/>
                      <img alt="resort_spa" src={restaurants}/>
                    </picture>
                    <div className="grid_head">
                        Restaurants &amp; Bars
                    </div>
                    <div className="grid_desc">
                        Relax and feast at our hotel's restaurants, serving cuisine from all corners of the world. Savor creative cocktails and drinks in our stylish bars. Our staff will ensure you have a wonderful time.
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={entertainmentsw } type="image/webp"/>
                      <img alt="resort_spa" src={entertainments}/>
                    </picture>
                    <div className="grid_head">
                        Entertainments
                    </div>
                    <div className="grid_desc">
                        Looking for a place to stay with endless fun and excitement? From thrilling casino games to relaxing SPA treatments, we have something for everyone. You won't regret it!
                    </div>
                </div>
                <div className="grid_items">
                    <picture>
                    <source srcSet={casinow } type="image/webp"/>
                      <img alt="resort_spa" src={casino}/>
                    </picture>
                    <div className="grid_head">
                        Casino
                    </div>
                    <div className="grid_desc">
                        Step into the glamorous world of Resort &amp; SPA Hotel Casino that offers guests an experience they'll never forget. From our luxurious rooms and suites to our decadent restaurants, Casino is sure to please. 
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="try_us">
    <div className="container">
        <h2>TRY US OUT!</h2>
        <p>YOU WILL NEVER REGRET</p>
    </div>
</section>
</>
  )
}

export default Home