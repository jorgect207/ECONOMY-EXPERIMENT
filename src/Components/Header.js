import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

import classes from "./Header.module.css";

function Header(props) {
  // const [moralis, deactivateWeb3] = useMoralis();
  useEffect(async function () {
    if (window.localStorage.getItem("connected")) {
      props.webConnect();
    }
  }, []);

  useEffect(async function () {
    (props.Moralis).onAccountChanged((account) => {
      if(account == null) {
      window.localStorage.removeItem("connected");
      props.deactivateWeb3();
    }
  } )
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h1>CITY OF GOLD</h1>
        <h3>Economy Experiment</h3>
      </div>
      <div className={classes.Butt}>
        {props.account ? (
          <button>
            {props.account.slice(0, 6)}...
            {props.account.slice(
              props.account.length - 4,
              props.account.length
            )}
          </button>
        ) : (
          <button onClick={props.webConnect}>Connect</button>
        )}
      </div>
    </div>
  );
}

export default Header;
