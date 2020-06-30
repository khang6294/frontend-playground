import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body, #root {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    #root {
      display: flex;
    }
`;
