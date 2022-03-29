import React from 'react'
import img15 from '../img/image15.png';
import img16 from '../img/image16.png';
import img17 from '../img/image17.png';
import img18 from '../img/image18.png';
import img71 from '../img/Frame7(1).png';
import img8 from '../img/Frame8.png';
import img9 from '../img/Frame9.png';
import img10 from '../img/Frame10.png';
function fooddrink() {
  return (
      <>
    <section className="appriciate" id="fooddrink">
        <div className="container">
            <h2>APPRECIATE OUR HAUTE CUISINE</h2>
            <p>Our guests can enjoy in rich offer of restaurants and bars that make Maestral a luxury destination for dining.</p>
            <div className="appriciate_grid">
                <div className="appriciat_itm">
                    <div className="appriciat_wrap">
                        <img alt="resort_spa" src={img15}/>
                        <div className="appriciat_desc">
                            <h3>Jade chinese restaurant</h3>
                            <p>If you are a fan of exotic flavors from the East, we recommend that you try authentic Chinese specialties of the ‘’Jade’’ restaurant.</p>
                        </div>
                    </div>
                </div>
                <div className="appriciat_itm">
                    <div className="appriciat_wrap">
                        <img alt="resort_spa" src={img16}/>
                        <div className="appriciat_desc">
                            <h3>Jade chinese restaurant</h3>
                            <p>If you are a fan of exotic flavors from the East, we recommend that you try authentic Chinese specialties of the ‘’Jade’’ restaurant.</p>
                        </div>
                    </div>
                </div>
                <div className="appriciat_itm">
                    <div className="appriciat_wrap">
                        <img alt="resort_spa" src={img17}/>
                        <div className="appriciat_desc">
                            <h3>Jade chinese restaurant</h3>
                            <p>If you are a fan of exotic flavors from the East, we recommend that you try authentic Chinese specialties of the ‘’Jade’’ restaurant.</p>
                        </div>
                    </div>
                </div>
                <div className="appriciat_itm">
                    <div className="appriciat_wrap">
                        <img alt="resort_spa" src={img18}/>
                        <div className="appriciat_desc">
                            <h3>Jade chinese restaurant</h3>
                            <p>If you are a fan of exotic flavors from the East, we recommend that you try authentic Chinese specialties of the ‘’Jade’’ restaurant.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="key_figure">
    <div className="container">
        <h2>KEY FIGURES</h2>
        <div className="figure_grid">
            <div className="figure_item">
                <img alt="resort_spa" src={img71}/>
                <p>285</p>
                <h4>Rooms and Suites</h4>
            </div>
            <div className="figure_item">
                <img alt="resort_spa" src={img8}/>
                <p>9</p>
                <h4>Restaurants &amp; Bars</h4>
            </div>
            <div className="figure_item">
                <img alt="resort_spa" src={img9}/>
                <p>87</p>
                <h4>Slot Machines in Casino</h4>
            </div>
            <div className="figure_item">
                <img alt="resort_spa" src={img10}/>
                <p>200</p>
                <h4>sq.m. Indoor Pool</h4>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default fooddrink