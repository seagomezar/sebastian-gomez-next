import styles from './concurso.module.css';
import preguntas from "./preguntas.json"; // WHERE YOUR POSTS ARE
import Pregunta from "../../components/Pregunta";
import { withRouter } from 'next/router'

class concurso extends React.Component {
    index = 0;
    
    constructor (props){
        super(props);
        this.getNextQuestion = this.getNextQuestion.bind(this);
        this.finish = this.finish.bind(this);
        this.state = {currentQuestion: 0};
        
    }
    
    getNextQuestion() {
        this.index = this.state.currentQuestion + 1;
        this.setState({currentQuestion: this.index});
    }

    finish() { 
        this.props.router.push('/fiesta/felicitaciones')
    }

    render() {
        return(
            <div>
                {(this.props.questions.length > this.index) ?  
                    <Pregunta 
                        STAND={this.props.questions[this.state.currentQuestion].STAND} 
                        TEXTO={this.props.questions[this.state.currentQuestion].TEXTO} 
                        CODIGO={this.props.questions[this.state.currentQuestion].CODIGO}
                        LAST={false}
                        getNextQuestion={this.getNextQuestion}/> :
                    <Pregunta 
                        STAND={this.props.lastQuestion.STAND} 
                        TEXTO={this.props.lastQuestion.TEXTO} 
                        CODIGO={this.props.lastQuestion.CODIGO}
                        LAST={true}
                        getNextQuestion={this.getNextQuestion}
                        finish={this.finish}/>
                }      
            </div>)
    }
}

export async function getStaticProps(context) {
    
    return {
        props: {
            lastQuestion: preguntas.data.pop(),
            currentQuestion: 0, questions: [...preguntas.data].sort(() => Math.random() - 0.5)
        }
    }
  }

export default withRouter(concurso);