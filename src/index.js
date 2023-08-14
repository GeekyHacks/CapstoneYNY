import './styles/main.sass';
import { headerSection } from './modules/header.js';
import { fstPage, scdPage } from './modules/mainSection.js';

window.onload = () => {
  headerSection();
  fstPage();
  scdPage();
};
