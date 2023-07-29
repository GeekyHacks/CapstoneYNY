// programs icons
// import program1 from '../assets/program_icon_01.svg';
// import program2 from '../assets/program_icon_02.svg';
// import program3 from '../assets/program_icon_03.svg';
// import program4 from '../assets/program_icon_04.svg';
// import program5 from '../assets/program_icon_05.svg';
// figures
// import Ghafiqi from '../Abdul_Rahman_Al_Ghafiqi.png';
// import Sheba from '../Queen_of_Sheba.jpg';
// import SalimRubai from '../SalimRubai.jpg';
// import Eryani from '../Abdrahman_al-Eryani.jpg';
// import Imam from '../Imam_qasam.png';
// import Hamdi from '../IbrahimAl_Hamdi.jpg';
// partners images
// import ssss from '../1328850086.svg';
// import BRICS from '../BRICS.svg';
// import Fist from '../Clenched-Fist.svg';
// import Marx from '../Nightingale_Marx_Lenin.svg';
// import YemenFlag from '../Yemen-Map-Flag-With-Stroke-And-Emblem.svg';

// other icons
// import arrowDown from '../arrow_down.svg';
// import title_underline from '../assets/title_underline.svg';
// import X from '../x.svg';
// import logo from '../logo.svg';

const main = document.querySelector('main');
const page1 = document.createElement('section');
page1.classList.add('page1');

export const fstPage = () => {
  page1.innerHTML = `
    <div class="hero">
    <h1>
      <span>"Hello! Yemeni People"</span> PATRIOTIC COMMONS <br />
      NATIONAL SUMMIT 2024
    </h1>
    <p class="fstPageP">
      Those national figures are the lighthouse we must seek during our dark times, therefore, it's a must for every Yemeni
      to remember them and teach the next generation about them.
    </p>
    <h2>2024.10.14(THU) ~ 15(FRI)</h2>
    <p class="adress">@Alsabeen Street, the revolution square.</p>
    </div>
    `;
  main.appendChild(page1);
};
