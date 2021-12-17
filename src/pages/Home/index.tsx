import React, { Component } from "react";

import style from "./index.module.less";

class Home extends Component<any, any> {
  render() {
    return (
      <div className={style.homeContainer}>
        <h1>Welcome to my onw website!</h1>
        <h2>Sometimes I may update some interesting things on this
          website.(::</h2>
        <h3>Why not have a try?</h3>
      </div>
    );
  }
}

export default Home;
