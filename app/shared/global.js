/* eslint-disable */

import { createGlobalStyle, css } from 'style-components';
import { color, typography } from '../styles';

export const bodyStyles = css`
 /* global styles */
`;


export const GlobalStyle = createGlobalStyle`
 body {
  border: 40px solid green;
   ${bodyStyles}
 }
`;

