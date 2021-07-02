import { Route,Redirect } from "react-router-dom"
import { useSelector} from "react-redux"


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector((state) => state.userReducer.loggedIn);
    const activeUser = useSelector((state) => state.userReducer.activeUser);
    

    console.log(loggedIn);
  
    return (
      <Route
        {...rest}
        render={(props) => {
          if (loggedIn) {
            return <Component {...props} activeUser={activeUser} loggedIn={loggedIn}/>;
          } else {
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location }}}
              />
            );
          }
        }}
      />
    );
  };


  export default ProtectedRoute;

  
