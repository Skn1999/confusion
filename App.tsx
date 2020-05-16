import React from 'react';
import Main from "./components/MainComponent";
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/configStore";

const store = ConfigureStore();

class App extends React.Component {
  render(){
    return (
      <Provider store = {store}>
        <Main />
      </Provider>
    );

  }
}

export default App;


