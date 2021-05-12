import React, { useEffect } from 'react';
import '../community/community.css';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Community() {

    useEffect(() => {
        Aos.init({duration:1000});
    }, [])

    return(
        <section className='meetcommunity'>
            <div className='community_info'>
                <h1 className='community_title'>MEET OUR <br />COMMUNITY</h1>
                <a className='know_more' href='/'>KNOW MORE</a>
                <p className='info_p'>LOREM IPSUM DOLOR SIT<br />
                    AMET ERNUT TEMPARTERO <br />
                    SERTU PER NABORE EN<br />
                    TORNA ENTALTO</p>
            </div>
            <div data-aos='slide-up' className='firstcomment'>
                <div className='tacomeal'>
                    <img className='food' src='tacos.png' alt='Taco Dish'/>
                    <img className='insta_logo' src='instagram-btn.svg' alt='Instagram Logo' />
                </div>
                <div className='background'>
                    <img className='crosses' src='crosses.png' alt='Crosses Grid'/>
                    <img className='stripes' src='stripes.png' alt='stripes'/>
                </div>
                <div className='comment_section'>
                    <h4 className='name'>@buzzfeedfood</h4>
                    <p className='comment'>It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮.
                            Find the recipe from the link in our bio! 📸: @taylormillerphoto</p>
                    <div className='feedback'>
                        <img className='comment_icon' src='comment_icon.svg' alt='comment icon'/>
                        <p className='comments'>60</p>
                        <img className='like_icon' src='like_icon.svg' alt='like icon'/>
                        <p className='likes'>14.7K</p>
                    </div>
                </div>
            </div>
            <div data-aos='slide-up' className='secondcomment'>
                <div className='waffle'>
                    <img className='food' src='waffle.png' alt='Waffle Dish'/>
                    <img className='insta_logo' src='instagram-btn.svg' alt='Instagram Logo' />
                </div>
                <div className='background'>
                    <img className='dots' src='dots.png' alt='Dots Grid'/>
                </div>
                <div className='comment_section2'>
                    <h4 className='name'>@love_food</h4>
                    <p className='comment'>Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
                     dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood</p>
                    <div className='feedback'>
                        <img className='comment_icon' src='comment_icon.svg' alt='comment icon'/>
                        <p className='comments'>789</p>
                        <img className='like_icon' src='like_icon.svg' alt='like icon'/>
                        <p className='likes'>99.7K</p>
                    </div>
                </div>
            </div>
            <div data-aos='slide-up' className='tirdcomment'>
                <div className='rice'>
                    <img className='food' src='rice.png' alt='Taco Dish'/>
                    <img className='insta_logo' src='instagram-btn.svg' alt='Instagram Logo' />
                </div>
                <div className='comment_section3'>
                    <h4 className='name'>@buzzfeedfood</h4>
                    <p className='comment'>Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)</p>
                    <div className='feedback'>
                        <img className='comment_icon' src='comment_icon.svg' alt='comment icon'/>
                        <p className='comments'>152</p>
                        <img className='like_icon' src='like_icon.svg' alt='like icon'/>
                        <p className='likes'>18.2K</p>
                    </div>
                </div>
            </div>
            <div data-aos='slide-up' className='last_info'>
                <p>Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit, sed<br />
                do eiusmod tempor incididunt<br />
                ut labore et dolore magna<br />
                 aliqua. Duis aute irure.</p>
            </div>
        </section>
    )
}


export default Community;