import { useState } from "react"
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters"
import { TECollapse, TERipple } from "tw-elements-react"
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['A', 'l', 'e', 'x','i', 's', ' ','B', 'a', 's','a','r','t','e']
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
    
    return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, I'm{' '}
            <AnimatedLetters
              className="animate-color"
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Computer Systems Student</h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
        <TERipple rippleColor="light">
          <a
            className="inline-block rounded bg-primary mr-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="button"
            onClick={toggleShow}
          >
            Link
          </a>
        </TERipple>
        <div
          class="mb-4 rounded-lg bg-primary-100 px-6 py-5 text-base text-primary-600"
          role="alert"
        >
          A simple primary alert—check it out!
        </div>
      </div>
    )
}

export default Home