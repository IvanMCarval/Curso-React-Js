import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <h1>Bem Vindo a pagina HOME</h1>
        <Link to="/sobre">Sobre</Link> <br/>
        <Link to="/contato">Contato</Link>
      </div>
    );
  }