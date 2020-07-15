import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { deepOrange, orange, green, amber, red } from '@material-ui/core/colors';

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: orange[500],
    },
    success: {
      main: green[500],
    },
    warning: {
      main: amber[500],
    },
    error: {
      main: red[500],
    },
  },
});

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <ThemeProvider theme={theme}>
          <Comp />
        </ThemeProvider>
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
