const header = document.querySelector('header');
const nav = document.createElement('nav');

export const headerSection = () => {
  nav.innerHTML = ` <nav>
    <div id="fstHead">
      <ul>
        <li><img src="images/facebook.svg" alt="facebook" /></li>
        <li><img src="images/twitter.svg" alt="twitter" /></li>
        <li><a href="#">English</a></li>
        <li><a href="index.html">My Page</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
    <div id="sndHead">
      <img id="menuBtn" src="./assets/mobile_menu.svg" alt="" />
      <img id="logo" src="./assets/logo.svg" alt="Party logo" />
      <ul id="labels">
        <li><a href="about.html">About</a></li>
        <li><a href=".programs">Program</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">News</a></li>
        <li><a id="bordered_label" href="#fst_page">YNY Campaign</a></li>
      </ul>
    </div>
    </nav>`;
  header.appendChild(nav);
};
