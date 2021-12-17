import React from 'react';
import { HashRouter } from 'react-router-dom';
import Pages from "./Pages";

function App() {

  let isMobile = false;

  const ua = navigator.userAgent.toLowerCase();
  const agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段

  for (let i = 0; i < agents.length; i++) {
    if (ua.indexOf(agents[i]) !== -1) {
      isMobile = true;
    }
  }

  return (
    isMobile ? (
      <div style={{ textAlign: "center", margin: "200px 20px 0 20px" }}>
        Sorry, this website does not support mobile access for the time being,
        please visit on PC.
      </div>
    ) : (
      <HashRouter>
        <Pages />
      </HashRouter>
    )
  );
}

export default App;
