import logo from './logo.svg';
import './App.css';
import MyLibrary from './pages/MyLibrary';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import baseTheme from './themes';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
    <div className="App">
     <MyLibrary/>
    </div>
    </ThemeProvider>
  );
}

export default App;
