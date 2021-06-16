import './App.css';
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import axios from 'axios'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'






function App() {

 

   

    

   

    

  

  

  



    

   

    

   
    
    




  return (

   <Router>
     <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Products"component={Products}/>
        </Switch>
   </Router>
  );
}

export default App;
