import React from 'react';
import '../popular_recipies/popular_recipies.css'


function PopularRecipies() {

    const scrollToLeft = () => {
        document.getElementById('recipie').scrollLeft = 0;
    }

    const scrollToRight = () => {
        document.getElementById('recipie').scrollLeft = 1900;
    }

    return (
        <div className='popular_recipies'>
            <div className='title-recipies'>
                <h1 className='title_recipie'>POPULAR <br/> RECIPIES</h1>
                <a href='/' className='see-all'>SEE ALL</a>
            </div>
            <div className='share'>
                <h2 className='share-recipie'>DO YOU WANT TO SHARE YOUR OWN RECIPE?</h2>
                <a href='/'  className='see-now'>SEND IT NOW</a>
            </div>
            <div id='recipie' className='recipie'>
            <img className='chef-stamp-toast' src='chef-stamp.svg' alt='chef-stamp'/>
                <div className='recipies first'>
                    <img className='recipie_picture toast' src='toast.png' alt='toast' />
                    <div className='servings'>
                        <h3 className='number-servings'>
                            <span className='number'>4</span> <br/> SERVINGS
                        </h3>
                    </div>
                    <img className='first-go-btn' src='go-btn.svg' alt='go-btn'/>
                    <div className='servings-background'></div>
                    <p className='dificulty'>DIFICULTY</p>
                    <h3 className='plate-name'>CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST</h3>
                    <p className='description'>Make a speedy version of romesco sauce with its famous
                    almond <br/> and red pepper flavours. Serve on sourdough and add broccoli for <br/> a colourful, veget…</p>
                    <p className='user'>USER FULL NAME</p>
                </div>
                <div className='recipies second'>
                    <img className='recipie_picture pinaple' src='pinaple.png' alt='toast' />
                        <div className='servings'>
                            <h3 className='number-servings'>
                                <span className='number'>2</span> <br/> SERVINGS
                            </h3>
                        </div>
                        <img className='second-go-btn' src='go-btn.svg' alt='go-btn'/>
                        <div className='servings-background'></div>
                        <p className='dificulty'>DIFICULTY</p>
                        <h3 className='plate-name'>PINEAPPLE FRUIT SALAD <br/> WITH FRESH CREAM</h3>
                        <p className='description'>The pineapple juice is the star <br/> of the dressing and what gives <br/> it such a refreshing and sweet <br/> taste. Pineapple juice is kno</p>
                        <p className='user'>USER FULL NAME</p>
                </div>
                <img className='chef-stamp-mushroom' src='chef-stamp.svg' alt='chef-stamp'/>
                <div className='recipies third'>
                    <img className='recipie_picture mushroom' src='mushroom.png' alt='toast' />
                        <div className='servings'>
                            <h3 className='number-servings'>
                                <span className='number'>2</span> <br/> SERVINGS
                            </h3>
                    </div>
                        
                        <img className='third-go-btn' src='go-btn.svg' alt='go-btn'/>
                        <div className='servings-background'></div>
                        <p className='dificulty'>DIFICULTY</p>
                        <h3 className='plate-name'>CHEESE, SPINACH & <br/> MUSHROOM STUFFED CHI…</h3>
                        <p className='description'>Amp up this dinner party <br/> classic by stuffing three types <br/> of cheese, spinach and <br/> mushroom into the chicken…</p>
                        <p className='user'>USER FULL NAME</p>
                    </div>
                <div className='recipies fourth'>
                    <img className='recipie_picture cuscus' src='cuscus.png' alt='toast' />
                        <div className='servings'>
                            <h3 className='number-servings'>
                                <span className='number'>8</span> <br/> SERVINGS
                            </h3>
                        </div>
                        <img className='fourth-go-btn' src='go-btn.svg' alt='go-btn'/>
                        <div className='servings-background'></div>
                        <p className='dificulty'>DIFICULTY</p>
                        <h3 className='plate-name'>FETA AND PEACH COUSCOUS</h3>
                        <p className='description'>Grab just four ingredients to <br/> make this easy, light lunch and <br/> enjoy a taste of summer. The <br/> combination of peaches, feta...</p>
                        <p className='user'>USER FULL NAME</p>
                </div>
                <div className='recipies fith'>
                    <img className='recipie_picture cuscus' src='rice.png' alt='toast' />
                        <div className='servings'>
                            <h3 className='number-servings'>
                                <span className='number'>8</span> <br/> SERVINGS
                            </h3>
                        </div>
                        <img className='fith-go-btn' src='go-btn.svg' alt='go-btn'/>
                        <div className='servings-background'></div>
                        <p className='dificulty'>DIFICULTY</p>
                        <h3 className='plate-name'>FETA AND PEACH COUSCOUS</h3>
                        <p className='description'>Grab just four ingredients to <br/> make this easy, light lunch and <br/> enjoy a taste of summer. The <br/> combination of peaches, feta...</p>
                        <p className='user'>USER FULL NAME</p>
                </div>
                <div className='recipies sixth'>
                    <img className='recipie_picture cuscus' src='tacos.png' alt='toast' />
                        <div className='servings'>
                            <h3 className='number-servings'>
                                <span className='number'>2</span> <br/> SERVINGS
                            </h3>
                        </div>
                        <img className='fith-go-btn' src='go-btn.svg' alt='go-btn'/>
                        <div className='servings-background'></div>
                        <p className='dificulty'>DIFICULTY</p>
                        <h3 className='plate-name'>FETA AND PEACH COUSCOUS</h3>
                        <p className='description'>Grab just four ingredients to <br/> make this easy, light lunch and <br/> enjoy a taste of summer. The <br/> combination of peaches, feta...</p>
                        <p className='user'>USER FULL NAME</p>
                </div>
            </div>
            <div className='nav-arrows'>
                    <button className='nav-arrow-btn' onClick={scrollToLeft}>
                        <img className='scroll-left' src='next.svg' alt='scroll-left' />
                    </button>
                    <button className='nav-arrow-btn' onClick={scrollToRight}>
                        <img className='scroll-right' src='next.svg' alt='scroll-right' />
                    </button>
                </div>
        </div>
    )
}

export default PopularRecipies