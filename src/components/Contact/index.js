import { useRef, useState} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'


const Contact = ()=>{
    const [letterClass] = useState('text-animate')

    const refForm = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_68grk98',
                "template_8bxv1lk",
                refForm.current,
                'iiymTLu-Uc-peAlMi'
            )
            .then(
                () => {
                    alert("Message sent!")
                    window.location.reload(false)
                },
                () => {
                    alert("Failed to send message")
                }
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Interested in all development opportunities. For questions contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' type='text' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact