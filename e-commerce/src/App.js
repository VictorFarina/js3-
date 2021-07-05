
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
import AllUsers from './components/AllUsers'
import UserOrders from './components/UserOrders'
import Orders from './components/user/Orders'
import Contact from './components/user/Contact'
import Payments from './components/user/Payments'
import ProtectedRoute from './routes/ProtectedRoute'
import Checkout from './views/Checkout'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'


function App() {  

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


            
            <ProtectedRoute exact path ="/user"component={User}/>
            <ProtectedRoute exact path ="/user/orders"component={Orders}/>
            <ProtectedRoute exact path ="/user/contact"component={Contact}/>
            <ProtectedRoute exact path ="/user/payments"component={Payments}/>
            <ProtectedRoute exact path ="/user/allUsers"component={AllUsers}/>

            <ProtectedRoute exact path ="/allUsers/:id/orders" component={UserOrders}/>

            <ProtectedRoute exact path ="/checkout"component={Checkout}/>

         
        </Switch>
   </Router>
  );
}

export default App;
