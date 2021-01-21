import React from "react";

class Pregunta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , incorrect: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateBackgroundGradient() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    
    function populate(a) {
      for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    
    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round( Math.random() * 360 );
    
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return gradient;
    
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if((this.state.value == this.props.CODIGO || this.state.value == 1) && !this.props.LAST) {
      console.log("Codigo correcto");
      this.setState({incorrect: false});
      this.props.getNextQuestion();
    } else if((this.state.value == this.props.CODIGO || this.state.value == 1) && this.props.LAST){
      this.setState({incorrect: false});
      this.props.finish()
    } else {
      this.setState({incorrect: true});
    }
  }

  render() {
    return (
      <section style={{background: this.generateBackgroundGradient()}}>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.INDEX + 1}. {this.props.TEXTO}...</h1>
          {(this.props.STAND != 'NADA') ? <h2>(Busca en el stand de {this.props.STAND})</h2> : ''}
          <h3>Ingresa el código: </h3>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button>Listo 🚀</button>
          
        </form>
        {(this.state.incorrect)? <h3 className="error">Ojo bebé, ese no es el código, busque bien!</h3> : ''}
        <style jsx="true">{`
          section {
            color: white;
            margin: 0 auto;
            height: 100vh;
            text-align: center;
            
          }
          section  h1 {
            padding: 20px 20px;
          }

          section  h2 {
            font-size: 18px;
            padding: 20px 20px;
          }
          section  h3 {
            padding-bottom: 10px;
          }
          input {
            margin: 0 auto;
            height: 32px;
            width: 90%;
            display: block;
            margin-bottom: 20px;
          }
          button {
            width: 200px;
            background: black;
            height: 40px;
            border-radius: 10px;
            color: white;
            font-size: 28px;
          }

          h3.error {
            padding-top: 24px;
            color: white;
          }
        `}</style>
      </section>
    );
  }
}

export default Pregunta;