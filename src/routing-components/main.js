import {Route, Switch } from 'react-router-dom';
import About from './aboute';
import Contact from './contact';
import Eroor from './eroor';
import Header from './header';

const Main=()=>{
    return(
        <div>
        <Header></Header>
        <Switch>     
        <Route exact path="/" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Eroor}></Route>
        </Switch>
        </div>
    )
}

export default Main