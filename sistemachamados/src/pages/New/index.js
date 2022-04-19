import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';

import './new.css';

import Header from '../../components/Header';
import Title from '../../components/Title';

import {FiPlus} from 'react-icons/fi';

export default function New() {
    const {user} = useContext(AuthContext);

    const [loadCustomers, setLoadCustomers] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [customerSelected, setCustomersSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    useEffect(() => {
        async function loadCustomers() {
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista = [];
                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })

                if(lista.length === 0){
                    console.log('Nenhuma empresa encontrada');
                    setCustomers([{id: '1', nomeFantasia: 'FREELA'}]);
                    setLoadCustomers(false);
                    return;
                }

                setCustomers(lista);
                setLoadCustomers(false);
            })
            .catch((error)=>{
                console.log(error);
                setLoadCustomers(false);
                setCustomers([{id: '1', nomeFantasia: ''}])
            })
        }

        loadCustomers();
    }, []);

    async function handleRegister(e) {
        e.preventDefault();

        await firebase.firestore().collection('chamados')
        .add({
            created: new Date(),
            cliente: customers[customerSelected].nomeFantasia,
            clienteId: customers[customerSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then(() => {
            toast.success('Chamado registrado com sucesso!');
            setComplemento('');
            setCustomersSelected(0);
        })
        .catch((error) => {
            toast.error('Erro ao registrar');
            console.log(error);
        })
    }

    //Chamado quando troca o assunto
    function handleChangeSelect(e) {
        setAssunto(e.target.value);
    }

    //chamado quando troca o status
    function handleOptionChange(e) {
        setStatus(e.target.value);
    }

    //chamado quando troca de cliente
    function handleChangeCustomers(e) {
        setCustomersSelected(e.target.value);
    }

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlus size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Clientes</label>

                        {loadCustomers ? (
                            <input type="text" disabled value="Carregando Clientes..."/>
                        ) : (
                            <select value={customerSelected} onChange={handleChangeCustomers}>
                                {customers.map((item, index) => {
                                    return(
                                        <option key={item.id} value={index}>
                                            {item.nomeFantasia}
                                        </option>
                                    );
                                })}
                            </select>
                        )}

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className="status">
                            <input type="radio" name="radio" value="Aberto" onChange={handleOptionChange} checked={status === 'Aberto'}/>
                            <span>Em Aberto</span>

                            <input type="radio" name="radio" value="Progresso" onChange={handleOptionChange} checked={status === 'Progresso'}/>
                            <span>Progresso</span>

                            <input type="radio" name="radio" value="Atendido" onChange={handleOptionChange} checked={status === 'Atendido'}/>
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        <textarea type="text" placeholder="Descreva seu problema (opcional)" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}