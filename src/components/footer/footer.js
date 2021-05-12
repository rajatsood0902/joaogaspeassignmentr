import React from 'react';
import '../footer/footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='section-rows'>
                <div className='sections'>
                    <h4 className='section'>SECTION 1</h4>
                    <ul>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                    </ul>
                </div>
                <div className='sections'>
                    <h4 className='section'>SECTION 2</h4>
                    <ul>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                    </ul>
                </div>
                <div className='sections'>
                    <h4 className='section'>SECTION 3</h4>
                    <ul>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                    </ul>
                </div>
                <div className='sections'>
                    <h4 className='section'>SECTION 4</h4>
                    <ul>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                    </ul>
                </div>
                <div className='sections'>
                    <h4 className='section'>SECTION 5</h4>
                    <ul>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                        <li>Subsection</li>
                    </ul>
                </div>
            </div>
            <p className='company-name'>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
            <h1 className='company-logo'><span className='this-is'>THIS IS THE</span><br/>LOGO</h1>
            <div className='socials'>
                <img className='social-logo1' src='facebook-icon.svg' alt='facebook icon' />
                <img className='social-logo' src='twitter-icon.svg' alt='instagram icon' />
                <img className='social-logo' src='instagram-icon.svg' alt='facebook icon' />
                <img className='social-logo' src='Linkedin-icon.svg' alt='facebook icon'/>
            </div>
        </footer>
    )
}

export default Footer;