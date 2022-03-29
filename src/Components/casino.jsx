import React from 'react'
import cas1 from '../img/cas1.png';
import cas11 from '../img/cas1(1).png';
import cas12 from '../img/cas1(2).png';
import cas13 from '../img/cas1(3).png';
import cas14 from '../img/cas1(4).png';
import cas14w from '../img/cas1(4).webp';
import cas15 from '../img/cas1(5).png';
import cas15w from '../img/cas1(5).webp';
import cas16 from '../img/cas1(6).png';
import cas16w from '../img/cas1(6).webp';
import cas17 from '../img/cas1(7).png';
import cas17w from '../img/cas1(7).webp';
import image14 from '../img/image14.png';
function Casino() {
  return (
      <>
    <section className="want_to_get">
    <div className="container">
        <div className="inner_want">
            <div className="want_get">
                <h2>Want to get the best price?</h2>
                <p>Compare the prices from different booking systems</p>
            </div>
            <a href="https://search.hotellook.com/" target="_blank" className="btn-primary" rel="noreferrer">BOOK YOUR STAY NOW</a>
        </div>
    </div>
</section>
<section className="maestral_casino" id="casino">
        <div className="container">
            <h2>RESORT &amp; SPA HOTEL CASINO</h2>
            <p className="cs_desc">Resort &amp; SPA Hotel Casino offers a luxurious gaming experience with all the best table games,<br/> slots, and fabulous shows to make you feel at home while you try your hand at winning big!</p>
            <div className="maestral_casino_grid">
                <div className="first_ca">
                    <div className="game_type">
                        <div className="game_img">
                            <img alt="resort_spa" src={cas1}/>
                        </div>
                        <div className="game_desc">
                            <h3>Table Games</h3>
                            <p>Indulge in a sumptuous feast of options, including blackjack, craps, and poker. </p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                            <img alt="resort_spa" src={cas11}/>
                        </div>
                        <div className="game_desc">
                            <h3>Tournaments</h3>
                            <p>Enjoy world-class accommodations and gaming action, plus the chance to win big! </p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                            <img alt="resort_spa" src={cas12}/>
                        </div>
                        <div className="game_desc">
                            <h3>Free Access</h3>
                            <p>Our luxurious hotel offers everything you need to escape the everyday, while our world-class casino provides endless entertainment.</p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                            <img alt="resort_spa" src={cas13}/>
                        </div>
                        <div className="game_desc">
                            <h3>Welcome Drink</h3>
                            <p>Fruity and refreshing, our Resort &amp; SPA Hotel Casino welcome drink is the perfect way to start your stay.</p>
                        </div>
                    </div>
                </div>
                <div className="second_ca">
                    <picture>
                        <img alt="resort_spa" src={image14} className="img-fluid"/>
                    </picture>

                </div>
                <div className="third_ca">

                    <div className="game_type">
                        <div className="game_img">
                        <picture>
                                  <source srcSet={cas14w} type="image/webp"/>
                                  <img alt="resort_spa" src={cas14} className="img-fluid"/>
                                </picture>
                        </div>
                        <div className="game_desc">
                            <h3>Slots</h3>
                            <p>With over 1,000 slot machines and table games, you'll be spoilt for choice.</p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                        <picture>
                                  <source srcSet={cas15w} type="image/webp"/>
                                  <img alt="resort_spa" src={cas15} className="img-fluid"/>
                                </picture>
                        </div>
                        <div className="game_desc">
                            <h3>Poker</h3>
                            <p>Our luxurious hotel offers all the amenities you need while our world-class casino provides endless excitement. </p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                        <picture>
                                  <source srcSet={cas16w} type="image/webp"/>
                                  <img alt="resort_spa" src={cas16} className="img-fluid"/>
                                </picture>
                        </div>
                        <div className="game_desc">
                            <h3>Roullette</h3>
                            <p>Indulge in our world-class SPA, savor exquisite cuisine, and experience excitement at our tables and slots.</p>
                        </div>
                    </div>
                    <div className="game_type">
                        <div className="game_img">
                            <picture>
                            <picture>
                                  <source srcSet={cas17w} type="image/webp"/>
                                  <img alt="resort_spa" src={cas17} className="img-fluid"/>
                                </picture>
                            </picture>
                        </div>
                        <div className="game_desc">
                            <h3>Shows</h3>
                            <p>With fabulous shows and first-rate accommodations, this hotel will make your vacation unforgettable.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Casino