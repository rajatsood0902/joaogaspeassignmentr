import React from 'react';
import '../front_page/front_page.css'

function FrontPage() {
    return (
        <section className="frontpage">
            <img className='stamp' src='stamp.png' alt='Gourmet Experience' />
            <div className='frontheading'>
                <h2 className='slogan'>THE BEST FOODIE</h2>
                <h1 className='experience'>Experience</h1>
                <h2 className='NowInLondon'>NOW IN LONDON</h2>
            </div>
            <div className='request_info'>
                <a className='reqinf' href='/'>REQUEST INFO</a>
            </div>
        </section>    
    )
}

export default FrontPage;