//import React from 'react'
//import { Component } from 'react/cjs/react.production.min';

/*const Equipe = (props) => {
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
            <Social fb={props.facebook}/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return(
        <div>
            <h1>Ola sou {props.nome}</h1>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>Linkedin </a>
        </div>
    );
}*/

/*class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Ola sou {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}*/

/*function App(params) {
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Carlos" cargo="Programador" idade="27"/>
        </div>
    );
}

export default App;*/

/*class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Ivan',
            contator: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contator++;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.contator--;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contator}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default App;*/

/*
//ciclo de vida

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: "00:00:00"
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    }

    componentDidUpdate(){
        console.log("Atualizou!!")
    }

    render(){
        return(
            <div>
                <h1>Meu projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;*/