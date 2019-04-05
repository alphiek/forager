import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url("https://use.typekit.net/zsm1mga.css");

@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752GT8G.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

html {
  font-size: calc(0.6em + 1vw);
}

body {
  text-align: center;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: regulator-nova, sans-serif;
  font-size: 0.5em;
  font-style: normal;
}

h1 {
  margin: 0;
  text-align: center;
  padding-top: 0.05em;
  font-weight: 700;
  font-size: 2.441em;
  color: #3F3F51;
}

h2 {
  margin-left: 1em;
  line-height: 100%
  text-align: left;
  font-weight: 700;
  font-size: 0.7em;
  color: #D9FB9B;
}

h3 {
  font-weight: 700;
  font-size: 0.6em;
  color: #fff;
}

h4 {
  font-weight: 700;
  font-size: 0.5em;
  color: #3F3F51;
}


ul {
  list-style-type: none;
  padding-left: 0;

}

li {
  display: inline-block;
  cursor: pointer;
  width: 9em;
  border-bottom: 0.1em solid #fff;
  padding: 0 0.58em 0.58em 0.58em;
  line-height: 130%;
  text-align: center;
  font-weight: 700;
  font-size: 0.8em;
  color: #3F3F51;
  transition: color .25s;

  &.active {
    border-bottom: 0.1em solid #fff;
    color: #fff;
  }

  &:hover {
    color: #d4cfcf;
  }
}

input {
  width: 14em;
  text-align: center;
  padding: 1em 1em;
  border: 1px solid #fff;
  font-size: .74em;
  font-weight: 500;
  font-family: regulator-nova, sans-serif;
  outline: none;

  &:hover {
    outline: none;

  &:focus {
    outline: none;

  &:last-child {
    margin-right: 0;
    }
}


`

export default GlobalStyle;
