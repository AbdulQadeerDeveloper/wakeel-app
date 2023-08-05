import React from 'react'
import { Profile } from '../Images'

const HeroSection = () => {
    return (
        <div className='hero-section' id='hero'>
            <div className='wrap-container'>

                {/* Shades */}
                <div className='container'>
                    <div className='shade1'></div>
                    <div className='shade2'></div>
                </div>

                <div className='center-flex container'>
                    <div className='left-side'>
                        <h1>Hire your Lawyer online now!</h1>
                        <p className='global-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, voluptatem dicta tempore eum fuga iusto ullam eos quos doloribus porro! Molestiae voluptatibus obcaecati nobis harum eligendi adipisci hic delectus accusantium debitis cumque?</p>
                    </div>

                    <div className='right-side'>
                        <div className="img-box">
                            <div className='hero-bg'></div>
                            <img src={Profile} alt="profile" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection