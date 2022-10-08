import { useState } from "react"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['A', 'l', 'e', 'x','i', 's', ' ','B', 'a', 's','a','r','t','e']
    
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, I'm <AnimatedLetters className='animate-color' letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                </h1>
                <h2>
                    Computer Systems Student
                </h2>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>

        </div>
    )
}

export default Home