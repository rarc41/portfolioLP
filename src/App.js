import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Hero from "./components/Hero";

// direccion a color tool
// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=69F0AE&secondary.color=FFB74D&primary.text.color=FB8C00&secondary.text.color=000000

const theme = createTheme({
  palette: {
    primary: {
      light: '#9fffe0',
      main: '#2E4D4D',
      dark: '#2bbd7e',
      contrastText: '#fb8c00',
    },
    secondary: {
      light: '#ffe97d',
      main: '#ffb74d',
      dark: '#c88719',
      contrastText: '#000000',
    },
    other: {
      claro: '#FFFFF'
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Hero></Hero>
      </ThemeProvider>
    </div>
  );
}

export default App;
