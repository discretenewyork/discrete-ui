const theme = {
  font: {
    url: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700|Yantramanav:400,700',
    serif: `'Yantramanav', apple-system, 'Helvetica Neue', Helvetica, sans-serif;`,
    mono: `'Inconsolata', 'SF Mono', 'Monaco', 'Source Code Pro', monospace;`
  },
  color: {
    white: '#fefefe',
    black: '#20272d',
    gray: '#dce1e6',

    red: '#ff3b30',
    orange: '#ff9500',
    yellow: '#ffcc00',
    green: '#4cd964',
    tealBlue: '#5ac8fa',
    blue: '#007aff',
    purple: '#5856d6',
    pink: '#ff2d55',

    text: '#20272d',
    inactive: '#7a8691',
    border: '#dce1e6',

    darkWhite: '#f3f5f6',
    bloomberg: '#4a3bfa',

    primary: '#20272d'
  }
}

export const globalStyle = `
  html, body {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    background: ${theme.color.white};
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: ${theme.font.serif};
    color: ${theme.color.text};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.75em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1.125; }
  h5 { font-size: 0.875em; }
`

export default theme
