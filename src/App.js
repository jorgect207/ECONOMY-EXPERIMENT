import React from "react";
import "./App.css";

import { useMoralis } from "react-moralis";

import Header from "./Components/Header";

function App() {
  const { enableWeb3, account, isWeb3Enabled, deactivateWeb3, Moralis } =
    useMoralis();

  async function Connect() {
    await enableWeb3();
    window.localStorage.setItem("connected", "metamask");
  }

  return (
    <div className="app">
      <Header
        webConnect={Connect}
        account={account}
        isWeb3Enabled={isWeb3Enabled}
        deactivateWeb3={deactivateWeb3}
        Moralis={Moralis}
      ></Header>
    </div>
  );
}

export default App;
