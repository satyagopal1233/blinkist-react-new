
import "./App.css";

import ThemeProvider from "@material-ui/styles/ThemeProvider";
import baseTheme from "./themes";
import { Provider } from "react-redux";

import store from "./components/redux/store";
import HomePage from "./pages/HomePage";


function App() {
  return (
   
      <ThemeProvider theme={baseTheme}>
        <Provider store={store}>
          <div className="App">
            <HomePage />
          </div>
        </Provider>
      </ThemeProvider>
   
  );
}

export default App;
