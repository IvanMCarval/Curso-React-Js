import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/contato" component={Contato}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;