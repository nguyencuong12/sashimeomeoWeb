import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
// import { HomePage, MainLayout, PublicLayout } from "./container";
import { MainLayout } from "./container";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login"></Redirect>}></Route>
          <Route path="/login" component={() => <h1>LOGIN</h1>}></Route>
          <MainLayout>
            <Switch>
              {routes.map((route, index) => (
                <Route path={route.path} key={index} component={route.component}></Route>
              ))}
            </Switch>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
