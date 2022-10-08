import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const About = () => {
    const [letterClass] = useState('text-animate')

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Motivated student completing Computer Systems degree. 
                    Experienced in Java and Web Development environments. 
                    School projects  included building apps, websites and validating code.
                    Enthusiastic Software Development student with complete understanding of entire software development lifecycle.
                </p>
            </div>

        </div>
    )
}



export default About