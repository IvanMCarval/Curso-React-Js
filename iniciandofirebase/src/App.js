import firebase from './firebaseConnection';
import {useState} from 'react';
import './style.css'

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  async function handleAdd() {
    /*await firebase.firestore().collection('posts').doc('12345').set({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      alert('Cadastrado com sucesso!!');
    })
    .catch((error)=>{
      alert(`Erro: ${error}`);
    })*/
    await firebase.firestore().collection('posts').add({
      titulo: titulo,
      autor: autor
    })
    .then(()=>{
      alert('Cadastrado com sucesso!!');
      setTitulo('');
      setAutor('');
    })
    .catch((error)=>{
      alert(`Erro: ${error}`);
    })
  }

  async function buscaPost() {
    /*await firebase.firestore().collection('posts').doc('123').get().then((snapshot)=>{
      setTitulo(snapshot.data().titulo);
      setAutor(snapshot.data().autor);
      alert('Sucesso!!');
    })
    .catch((error)=>{
      alert(`Erro: ${error}`);
    })*/

    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot)=>{
      let lista =[];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })
      setPosts(lista);
    })
    .catch((error)=>{
      alert(`Erro: ${error}`);
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>
      <br/>

      <div className="container">
        <label>Titulo: </label>
        <input type="text" valeu={titulo} onChange={(e)=>{setTitulo(e.target.value)}}/>

        <label>Autor: </label>
        <input type="text" valeu={autor} onChange={(e)=>{setAutor(e.target.value)}}/>
        <br/>
        <button onClick={handleAdd}>Cadastrar</button>
        <br/>
        <button onClick={buscaPost}>Buscar Post</button>
        <br/>
        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <span>Titulo: {post.titulo}</span> <br/>
                <span>Autor: {post.autor}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
