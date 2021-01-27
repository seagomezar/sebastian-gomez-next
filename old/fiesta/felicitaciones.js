import styles from './felicitaciones.module.css';

export default class Felicitaciones extends React.Component {

    render() {
        return(
            <div className={styles.container}>
                <h1>🎉🎉🎉<br/>
                    Felicitaciones Ganaste! Corre y abre el cofre con el código: 824 <br/>🎉🎉🎉</h1>
            </div>)
    }
}