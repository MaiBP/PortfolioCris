import './contact.css';
import Phone from '../../img/logowapp.png';
import Email from '../../img/emailLogo.png';
import Address from '../../img/location.png';
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

   const handleSubmit = (e) => {
    e.preventDefault();
      emailjs
        .sendForm(
        'service_njqutu8', 'template_fvi5ny2', 
        formRef.current, 
        'user_juWGj0Tmvw4Fj2Py0QTTs')
        .then((result) => {
          console.log(result.text);
          setDone(true);
        }, (error) => {
          console.log(error.text);
        });
    };

    return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Estamos en contacto!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone" className="c-icon" />
              +34 658927156
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="Email" />
              cristianmicale@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src= {Address} alt='address'/> Barcelona, Esp. 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Entrenamientos personalizados,  propuestas, entrevista deportiva, no dudes en escribirme!</b>
          </p>
         <form ref={formRef} onSubmit={handleSubmit}>
             <input style = {{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name'/>
             <input style = {{backgroundColor: darkMode && '#333'}}type='text' placeholder='Subject' name='user_subject'/>
             <input style = {{backgroundColor: darkMode && '#333'}} type='text' placeholder='Email' name='user_email'/>
             <textarea rows = '5' placeholder='Message' name= 'message'/>
             <button>Enviar!</button>
             {done && <h1>Gracias por tu mensaje!</h1>}
         </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;