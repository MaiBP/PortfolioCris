import './about.css'
import Crispic from '../../img/crisbarsa.jpeg'
const About = () => {
    return (
        <div className='about'>
        <div className='about-left'>
                   <img src={Crispic} alt="cristianmicale"className="a-img"/>
        </div>
        <div className="about-right">
        <h1 className="a-title">Trayectoria</h1>
        <p class="a-sub">
          "¡Disciplina, sacrificio y humildad!"
        </p>
        <p className="a-desc">
          Como jugador, comencé en la escuela de Fren y Bochini en el Club Atlético Independiente, luego pase a Racing Club de Avellaneda, ese paso fue breve. Luego al Club Atlético All Boys, donde hice todas las inferiores hasta llegar a cuarta división y participar del selectivo. Por otro lado, vivi una experiencia en México en el Cruz Azul Oaxaca. Volví a mi país para jugar en futsal en Yupanqui, Huracán y All Boys.
          <br></br>
          <br></br>
          Como entrenador, estuve en Unión de Pilar y Atlético Pilar en la liga Escobar. En Atletico Pilar me desarrolle plenamente hasta llegar a coordinador general de fútbol con mi proyecto de fútbol integral, conectaba a todo el fútbol desde escuelita hasta la primera, tanto en masculino como femenino. Dirigi en las juveniles de Real Pilar FC colaborando tambien con la primera. Hoy, en Barcelona estoy a cargo de la coordinacion y dirijo las juveniles del Futbol Club Almeda. 
        </p>
      </div>
    </div>
    )};

export default About 


/*<div className='a-card'>
                   <img src={Crispic} alt="cristianmicale"className="a-img"/>
              </div>*/ 