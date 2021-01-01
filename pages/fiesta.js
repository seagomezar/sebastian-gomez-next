import Countdown from 'react-countdown';

export default class Fiesta extends React.Component {

    renderer = ({ days, hours, minutes, seconds, completed })=>{
      return `${days} Días, ${hours} Horas, ${minutes} Minutos y ${seconds} Segundos`
    } 

    render() {
        return(
            <div>
                <h1>Mi fiesta de cumpleaños</h1>
                <p>Ey gracias por querer asistir a mi fiesta sin embargo aún no es tiempo <br/>
                     podrás descargar la aplicación en: <Countdown date="2021-01-15T00:00:00" renderer={this.renderer}/></p>
                <h2>Para mi fiesta faltan: <Countdown date="2021-01-23T00:00:00" renderer={this.renderer}/></h2>
         </div>)
    }
}