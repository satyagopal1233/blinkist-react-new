import logo from './logo.svg';
import './App.css';
import BlinkistHome from './pages/BlinkistHome';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import baseTheme from './themes';
import { Provider } from 'react-redux';

import store from './components/redux/store';





function App() {
  return (
    <ThemeProvider theme={baseTheme}>
     <Provider store={store}>
    <div className="App">
    <BlinkistHome/>
    </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
