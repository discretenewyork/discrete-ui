const theme = {
  font: {
    sans: [
      '-apple-system',
      'system-ui',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol";'
    ].join(', '),
    mono: [
      '"Inconsolata"',
      '"SF Mono"',
      '"Monaco"',
      '"Source Code Pro"',
      'monospace;'
    ].join(', ')
  },
  color: {
    white: '#fefefe',
    black: '#20272d',
    gray: '#dce1e6',
    darkGray: '#7a8691',

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
    border: '#20272d',
    lightBorder: '#dfdfdf',

    darkWhite: '#f3f5f6',
    bloomberg: '#2800d8'
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
    font-family: ${theme.font.sans};
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
