import React from 'react'
import port1 from '../img/1.png';
import port1w from '../img/1.webp';
import port2 from '../img/2.webp';
import port2w from '../img/2.png';
import port3 from '../img/3.webp';
import port3w from '../img/3.png';
import port4 from '../img/4.webp';
import port4w from '../img/4.png';
import port5 from '../img/5.webp';
import port5w from '../img/5.png';
import port6 from '../img/6.webp';
import port6w from '../img/6.png';
import port7 from '../img/7.webp';
import port7w from '../img/7.png';
import port8 from '../img/8.webp';
import port8w from '../img/8.png';
import port9 from '../img/9.webp';
import port9w from '../img/9.png';
import  { useState } from "react";
import IsoTopeGrid from "react-isotope";

const filtersss = [
    { "label": "all", "isChecked": true },
    { "label": "SUITES", "isChecked": true },
    { "label": "PREMIUM", "isChecked": false },
  ];
const cardsLayout = [
    {
      "id": "a",
      "row": 0,
      "col": 0,
      
      "webp": port1w,
      "png":port1,
      "filter": ["PREMIUM", "PREMIUM"]
    },
    {
      "id": "b",
      "row": 0,
      "col": 1,
      
      "webp": port2w,
      "png":port2,
      "filter": ["SUITES", "SUITES"]
    },
    {
      "id": "c",
      "row": 0,
      "col": 3,
      
      "webp": port3w,
      "png":port3,
      "filter": ["PREMIUM", "PREMIUM"]
    },
    {
      "id": "d",
      "row": 1,
      "col": 0,
      
      "webp": port4w,
      "png":port4,
      "filter": ["SUITES", "SUITES"]
    },
    {
      "id": "e",
      "row": 1,
      "col": 1,
      
      "webp": port5w,
      "png":port5,
      "filter": ["PREMIUM", "SUITES"]
    },
    {
      "id": "f",
      "row": 1,
      "col": 2,
      
      "webp": port6w,
      "png":port6,
      "filter": ["SUITES", "PREMIUM"]
    },
    {
      "id": "g",
      "row": 2,
      "col": 0,
      
      "webp": port7w,
      "png":port7,
      "filter": ["SUITES", "PREMIUM"]
    },
    {
      "id": "h",
      "row": 2,
      "col": 1,
      
      "webp": port8w,
      "png":port8,
      "filter": ["SUITES", "PREMIUM"]
    },
    {
      "id": "i",
      "row": 2,
      "col": 2,
      
      "webp": port9w,
      "png":port9,
      "filter": ["SUITES", "PREMIUM"]
    }
  ];
function Portfolio() {
    // Local state for managing filtering logic
    const [filters, updateFilters] = useState(filtersss);
   
    // Filter change handler
    const onFilter = event => {
      const {
        target: { value, checked }
      } = event;
   
      updateFilters(state =>
        state.map(f => {
          if (f.label === value) {
            return {
              ...f,
              isChecked: checked
            };
          }
   
          return f;
        })
      );
    };
   
    return (
<>

<section className="rooms_suits portfolio" id="portfolio">
        <h2>THE MOST LUXURIOUS ACCOMMODATION</h2>
        <div className="container" data-aos="fade-up">
        <div className="filter-container">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12" id="portfolio-flters">
          {filters.map(f => (
            <div className="filter" key={`${f.label}_key`}>
              <input
                id={f.label}
                type="checkbox"
                value={f.label}
                onChange={onFilter}
                checked={f.isChecked}
              />
              <label htmlFor={f.label}>{f.label}</label>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
        <div className="container">
          <IsoTopeGrid
            gridLayout={cardsLayout} // gridlayout of cards
            noOfCols={3} // number of columns show in one row
            unitWidth={403} // card width of 1 unit
            unitHeight={288} // card height of 1 unit
            filters={filters} // list of selected filters
          >
            {cardsLayout.map(card => (
              <div key={card.id} className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-wrap">
                        <a href="https://search.hotellook.com/" target="_blank" rel="noreferrer">
                            <div className="port-img">
                                <picture>
                                  <source srcSet={card.webp} type="image/webp"/>
                                  <img alt="resort_spa" src={card.png} className="img-fluid"/>
                                </picture>
                            </div>
                            <div className="portfolio-info">
                                <h4>Premium Standart Room</h4>
                                <p>Take a joy of a space of 33 m², featuring a private balcony.</p>
                                <p>Book Now from  £345</p>
                            </div>
                        </a>
                    </div>
              </div>
            ))}
          </IsoTopeGrid>
        </div>
      
      </section>
      
      </>
    );
  }

export default Portfolio