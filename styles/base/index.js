import { injectGlobal } from 'react-emotion';
import { colors } from "../vars";

injectGlobal(`html {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}`);

injectGlobal(`h1 {
  font-weight: 700;
}`);

injectGlobal(`p {
  line-height: 1.5em;
}`);