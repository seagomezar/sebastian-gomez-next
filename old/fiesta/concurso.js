import styles from './concurso.module.css';
import preguntas from "./preguntas.json"; // WHERE YOUR POSTS ARE
import Pregunta from "../../components/Pregunta";
import { withRouter } from 'next/router'

class concurso extends React.Component {
    index = 0;
    unsortedQuestions = [];
    constructor (props){
        super(props);
        const {questions} = this.props;
        this.unsortedQuestions = [...questions].sort(() => Math.random() - 0.5)
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
        if (parseInt(Date.now())>1) {
            return(
                <div>
                    {(this.props.questions.length > this.index) ?  
                        <Pregunta 
                            STAND={this.unsortedQuestions[this.state.currentQuestion].STAND} 
                            TEXTO={this.unsortedQuestions[this.state.currentQuestion].TEXTO} 
                            CODIGO={this.unsortedQuestions[this.state.currentQuestion].CODIGO}
                            LAST={false}
                            INDEX={this.state.currentQuestion}
                            getNextQuestion={this.getNextQuestion}/> :
                        <Pregunta 
                            STAND={this.props.lastQuestion.STAND} 
                            TEXTO={this.props.lastQuestion.TEXTO} 
                            CODIGO={this.props.lastQuestion.CODIGO}
                            INDEX={this.state.currentQuestion}
                            LAST={true}
                            getNextQuestion={this.getNextQuestion}
                            finish={this.finish}/>
                    }      
                </div>)
        } else {
            return <div><h1>Aún no puedes iniciar el concurso</h1></div>
        }
        
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