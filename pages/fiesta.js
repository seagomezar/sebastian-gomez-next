import Countdown from 'react-countdown';
import Image from 'next/image'
import styles from './fiesta.module.css';

export default class Fiesta extends React.Component {

    componentDidMount() {
    }

    renderer = ({ days, hours, minutes, seconds, completed })=>{
      return <div className={styles.countdown}>
          <div>{days}<span>Días</span></div>
          <div>{hours}<span>Horas</span></div>
          <div>{minutes}<span>Mins</span></div>
          <div>{seconds}<span>Segs</span></div>
      </div>
    } 

    render() {
        return(
            <div className={styles.container}>
                {[...Array(15)].map((x, i) =>
                    <div className={styles.confetti} key={i} ></div>
                )}
                <h1 className={styles.faltan}>Faltan: <Countdown date="2021-01-23T16:00:00" renderer={this.renderer}/></h1>
                <h2 className={styles.secondary}>La aplicación estará lista el próximo 15 de Enero</h2>
                <div className={styles.collage}>
                    <img src="/fiesta/1.jpeg"/>
                    <img src="/fiesta/2.jpeg"/>
                    <img src="/fiesta/3.jpeg"/>
                    <img src="/fiesta/4.jpeg"/>
                    <img src="/fiesta/5.jpeg"/>
                    <img src="/fiesta/6.jpeg"/>
                </div>
                <h2 className={styles.ciao}>Nos Vemos 😉</h2>
            </div>)
    }
}