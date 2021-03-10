import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
// import { HomePage, MainLayout, PublicLayout } from "./container";
import { MainLayout, Login, Signup } from "./container";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login"></Redirect>}></Route>
          {/* <Route path="/login" component={() => <Login></Login>} </Route> */}
          {/* <Route path="/login" component={Login}></Route> */}
          {/* <Route path = "/login" render ={()=><Login></Login>}</Route> */}
          <Route path="/login" render={() => <Login></Login>}></Route>
          <Route path="/signup" render={() => <Signup></Signup>}></Route>
          <MainLayout>
            <Switch>
              {routes.map((route, index) => (
                <Route exact path={route.path} key={index} component={route.component}></Route>
              ))}
            </Switch>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
