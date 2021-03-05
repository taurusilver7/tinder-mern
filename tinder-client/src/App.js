import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/Chats/ChatScreen/ChatScreen";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header back="/chat" />
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Header back="/" />
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
