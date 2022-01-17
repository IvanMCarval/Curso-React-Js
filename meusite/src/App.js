import React from 'react'
import { Component } from 'react/cjs/react.production.min';
//import Membro from './components/Membro'
//import Feed from './components/Feed';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            //status: 1
            //status: true
            /*feed:[
                {id: 1, username: 'Jorge', curtidas:10, comentarios:2},
                {id: 2, username: 'Pedro', curtidas:130, comentarios:24},
                {id: 3, username: 'Carla', curtidas:110, comentarios:30},
                {id: 4, username: 'Ricardo', curtidas:1, comentarios:0},
            ]*/
            nome2: '',
            email2: '',
            senha2: '',
            erro: '',
            form:{
                nome:'',
                email:'',
                senha:'',
                sexo:''
            }
        }
        this.cadastrar = this.cadastrar.bind(this);
        this.dadosForm = this.dadosForm.bind(this);
        //this.entrar = this.entrar.bind(this);
        //this.sair = this.sair.bind(this);
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    cadastrar(event){
        const {nome2, email2 ,senha2} = this.state;

        if (nome2 !== '' && email2 !== '' && senha2 !== '') {
            alert(`Nome: ${nome2} \nEmail: ${email2} \nSenha: ${senha2}`);
        }else{
            this.setState({erro: 'Algo esta faltando'})
        }
        
        event.preventDefault();
    }


    /*entrar(){
        this.setState({status: true})
    }

    sair(){
        this.setState({status: false})
    }*/

    render(){
        return(
            <div>
                <h2>Login</h2>
                Nome: 
                <input type="text" name="nome" value={this.state.form.nome} 
                    onChange={this.dadosForm}
                /> <br/>
                Email:
                <input type="email" name="email" value={this.state.form.email} 
                    onChange={this.dadosForm}
                /> <br/>
                Senha: 
                <input type="password" name="senha" value={this.state.form.senha}
                    onChange={this.dadosForm}
                /> <br/>
                Sexo: 
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value="masculino">Maculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <div>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>

                <br/>
                <br/>

                <h1>Novo Usuario</h1>
                {this.state.erro && <p>{this.state.erro}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input type="text" value={this.state.nome2} onChange={(e) => this.setState({nome2: e.target.value})}></input> <br/>
                    <label>Email: </label>
                    <input type="email" value={this.state.email2} onChange={(e) => this.setState({email2: e.target.value})}></input><br/>
                    <label>Senha: </label>
                    <input type="password" value={this.state.senha2} onChange={(e) => this.setState({senha2: e.target.value})}></input><br/>
                    <button type="submit">Cadastrar</button>
                </form>

                {/*<Membro nome="Visitante"/>*/}
                {/*{this.state.status === 1 && <h1>Bem Vindo ao Sistema</h1>}

                <div>
                    <h2>Curso React</h2>
                </div>*/}

                {/*{this.state.status ?
                <div>
                    <h2>Bem vindo ao sistema</h2>
                    <button onClick={this.sair}>Sair do sistema</button>
                </div>:
                <div>
                    <h2>Ola Visitante, faça o login</h2>
                    <button onClick={this.entrar}>Entrar no sistema</button>
                </div>
                }*/}

                {/*{this.state.feed.map((item) => {
                    return(
                        <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}*/}

                
            </div>
        );
    }
}

export default App;