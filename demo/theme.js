const theme = {
  font: {
    url: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700|Yantramanav:400,700',
    serif: `'Yantramanav', apple-system, 'Helvetica Neue', Helvetica, sans-serif;`,
    mono: `'Inconsolata', 'SF Mono', 'Monaco', 'Source Code Pro', monospace;`
  },
  color: {
    white: '#FEFEFE',
    black: '#20272D',
    gray: '#DCE1E6',

    blue: '#4A3BFA',
    yellow: '#EBFA3B',
    red: '#FA4A3B',
    green: '#88B04B',

    text: '#20272D',
    inactive: '#7A8691',
    border: '#DCE1E6',

    darkWhite: '#F3F5F6',

    primary: '#4A3BFA'
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
