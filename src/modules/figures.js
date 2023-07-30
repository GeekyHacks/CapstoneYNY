import { main } from './mainSection.js';

// figures
import Ghafiqi from '../assets/Abdul_Rahman_Al_Ghafiqi.png';
import Sheba from '../assets/Queen_of_Sheba.jpg';
import SalimRubai from '../assets/SalimRubai.jpg';
import Eryani from '../assets/Abdrahman_al-Eryani.jpg';
import Imam from '../assets/Imam_qasam.png';
import Hamdi from '../assets/IbrahimAl_Hamdi.jpg';

import underline from '../assets/title_underline.svg';
import arrowDown from '../assets/arrow_down.svg';

const page3 = document.createElement('section');

// list of the other figures
const figuresArray = [
  {
    img: Hamdi,
    name: ' Ibrahim al-Hamdi',
    occupation: 'President',
    description:
      'was the leader of a military coup in the Yemen Arab Republic that overthrew the regime of President Abdul Rahman al-Iryani on 13 June 1974. After the revolt, he was President of the Military Command Council that governed the country.',
  },
  {
    img: SalimRubai,
    name: 'Salim Rubai Ali',
    occupation: 'President',
    description:
      'known by his comrades as "Salimin", was the Marxist head of state of the Peoples Democratic Republic of Yemen (South Yemen) from 22 June 1969 until his executionon 26 June 1978.',
  },
  {
    img: Eryani,
    name: 'Abdul Rahman Yahya al-Eryani',
    occupation: 'President',
    description: 'was the President of the Yemen Arab Republic (North Yemen) from 5 November 1967 to 13 June 1974',
  },
  {
    img: Imam,
    name: 'Al-Mansur al-Qasim',
    occupation: 'Imam',
    description:
      ' was an Imam of Yemen, who commenced the struggle to liberate Yemen from the Ottoman occupiers. He was the founder of a Zaidi kingdom that endured, under many vicissitudes, until 1970.',
  },
];

page3.classList.add('page3');
export const thrdPage = () => {
  page3.innerHTML = `
  <div class="Page">
  <div class="fstPart">
    <h2>National Figures</h2>
    <img src="${underline}" alt="" />
  </div>
  <ul class="UL">
    <li>
      <div class="imgPart">
        <img src="${Ghafiqi}" alt="Program icon" />
      </div>
      <div class="contentPart">
        <h2>Abd al-Rahman ibn Abd Allah Al-Ghafiqi</h2>
        <h3>commander of the Andalusian Muslims</h3>
        <p>The governor of Andalusia (Spain nowadays) for two times.</p>
      </div>
    </li>
    <li>
      <div class="imgPart">
        <img src="${Sheba}" alt="Program icon" />
      </div>
      <div class="contentPart">
        <h2>The Queen of Sheba</h2>
        <h3>The Queen of Sheba Kingdom</h3>
        <p>She was one of few great leaders that was wise and kind</p>
      </div>
    </li>
  </ul>
  <button class="viewMore">View More <img src="${arrowDown}" alt="More" /></button>
</div>
  
  `;
  main.appendChild(page3);
};
