
import './App.css';
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Products from './views/Products'
import Cart from './components/Cart'
import ProductPage from './views/ProductPage'
import Login from './components/Login'
import Register from './components/Register'
import User from './views/User'
import Checkout from './views/Checkout'
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

            <Route exact path ="/Products/:id"component={ProductPage}/>

            <Route exact path ="/cart"component={Cart}/>
            <Route exact path ="/login"component={Login}/>
            <Route exact path ="/register"component={Register}/>

            <Route exact path ="/user/:id" component={User}/>
            <Route exact path ="/checkout" component={Checkout}/>

            

        </Switch>
   </Router>
  );
}

export default App;
