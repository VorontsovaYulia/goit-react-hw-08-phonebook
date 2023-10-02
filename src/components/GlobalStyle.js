import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    padding: 15px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};

ul,
ol,
a {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: #666666;
}

button {
    margin: 0 10px;
    display: inline-block;
};


code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};
`;