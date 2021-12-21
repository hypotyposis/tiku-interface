import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, TrainingPage, AdminPage, DashboardPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TrainingPage} />
          {/* <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} /> */}
          <Route path="/home" component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
