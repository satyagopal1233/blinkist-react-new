import logo from './logo.svg';
import './App.css';
import BlinkistHome from './pages/BlinkistHome';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import baseTheme from './themes';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
    <div className="App">
     <BlinkistHome/>
    </div>
    </ThemeProvider>
  );
}

export default App;
