import React from 'react';
import './App.scss';
import Welcome from "./welcome/Welcome";
import InfoPanel from "./info-panel/InfoPanel";

function App() {
  return (
    <div className="wd-app">
        <Welcome>
        </Welcome>
        <InfoPanel>
        </InfoPanel>
    </div>
  );
}

export default React.memo(App);
