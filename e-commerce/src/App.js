
import './App.css';
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'



function App() {  

  // const api = axios.create({baseURL:'http://localhost:9999/'})
  // api.get('api/products').then(res =>{
  // console.log(res.data);
  // })

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
