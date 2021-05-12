import React, { useEffect, useState } from 'react';
import '../our_menu/our_menu.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

function OurMenu() {
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    

    return (
        <div className='our_menu'>
            <div className='our-menu-title'>
                <h1 className='title'>OUR MENU</h1>
                <a href='/' className='know_more'>KNOW MORE</a>
            </div>
            <div className='menu'>
                <div data-aos='slide-up' className='plates starters' style={{transform:`translateY(${offsetY * 0.01}px`}}>
                    <h1 className='title'>STARTERS</h1>
                    <div className='dishes'>
                        <h3 className='dish_name'>QUINOA CROQUETAS</h3>
                        <p className='description'>Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)</p>
                        <p className='price'>£4.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>CHIFA CHICHARRONES</h3>
                        <p className='description'>Slow cooked, crispy pork belly with sweet soy sauce</p>
                        <p className='price'>£6.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>CALAMARES</h3>
                        <p className='description'>Crispy baby squid with pickled jalapeño miso salsa</p>
                        <p className='price'>£6.95</p>
                    </div>
                </div>
                <div data-aos='slide-down' className='plates main_courses' style={{transform:`translateY(${offsetY * 0.03}px`}}>
                    <h1 className='title'>MAIN COURSES</h1>
                    <div className='dishes'>
                        <h3 className='dish_name'>EL CLASSICO</h3>
                        <p className='description'>Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)</p>
                        <p className='price'>£8.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>TIRADITO CALLAO</h3>
                        <p className='description'>Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies</p>
                        <p className='price'>£8.95</p>
                    </div>
                </div>
                <div data-aos='slide-up' className='plates sides' style={{transform:`translateY(${offsetY * -0.03}px`}}>
                    <h1 className='title'>SIDES</h1>
                    <div className='dishes'>
                        <h3 className='dish_name'>SUPER POLLO</h3>
                        <p className='description'>Marinated corn fed chicken pieces with rocotto salsa</p>
                        <p className='price'>£4.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>PATATAS FRITAS</h3>
                        <p className='description'>Sweet potato fries with aji rocotto mayonnaise (v)</p>
                        <p className='price'>£3.95</p>
                    </div>
                </div>
                <div data-aos='slide-down' className='plates desserts' style={{transform:`translateY(${offsetY * 0.03}px`}}>
                    <h1 className='title'>DESSERTS</h1>
                    <div className='dishes'>
                        <h3 className='dish_name'>ICECREAM</h3>
                        <p className='description'>Lorem ipsum dolor sit amet salerma petrum sea</p>
                        <p className='price'>£3.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>TIRAMISSU</h3>
                        <p className='description'>Lorem ipsum dolor sit amet salerma petrum sea</p>
                        <p className='price'>£3.95</p>
                    </div>
                    <div className='dishes'>
                        <h3 className='dish_name'>CHOCOLATE BROWNIE</h3>
                        <p className='description'>Lorem ipsum dolor sit amet salerma petrum sea</p>
                        <p className='price'>£3.95</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OurMenu;
