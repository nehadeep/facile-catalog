import React from 'react';
import './App.scss';
import SignIn from "./Components/SignIn/SignIn";
import MiniDrawer from "./Components/Navigation/Drawer/Drawer";

function App() {
  return (
    <div className="App">
     Inventory tools of a company
        {/*<SignIn/>*/}
<MiniDrawer/>
    </div>
  );
}

export default App;
