import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import FormPropsTextFields from './pages/signup';
import SignIN from './pages/signin';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Service}/>
        <Route path='/contact-us' component={Contact}/>
        <Route path='/signup' component={FormPropsTextFields}/>
        <Route path='/signin' component={SignIN}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
