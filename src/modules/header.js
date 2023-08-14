import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import logo from '../assets/logo.svg';
import menu from '../assets/mobile_menu.svg';
const header = document.querySelector('header');
const nav = document.createElement('nav');

export const headerSection = () => {
  nav.innerHTML = ` <nav>
    <div class="fstHead">
      <ul id="fstHead">
        <li><img src="${facebook}" alt="facebook" /></li>
        <li><img src="${twitter}" alt="twitter" /></li>
        <li><a href="#">English</a></li>
        <li><a href="index.html">My Page</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
    <div id="sndHead">
      <img id="menuBtn" src="${menu}" alt="" />
      <img id="logo" src="${logo}" alt="Party logo" />
      <ul id="labels">
        <li><a href="about.html">About</a></li>
        <li><a href=".programs">Program</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">News</a></li>
        <li><a id="borderLabel" href="#fst_page">YNY Campaign</a></li>
      </ul>
    </div>
    </nav>`;
  header.appendChild(nav);
};
