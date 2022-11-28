const menuLogo = document.querySelector('.menuLogo');
const coverPage = document.querySelector('.coverPage');
const logoOne = document.querySelector('.logo1');
const logoTwo = document.querySelector('.logo2');
const logoThree = document.querySelector('.logo3');
let isOpened = false;

const menuLogoFunction = () =>{
     if (isOpened) {
          logoTwo.classList.remove('disappear');
          logoOne.classList.remove('logoOne');
          logoThree.classList.remove('logoThree');
          coverPage.classList.remove('menu-item');
          coverPage.innerHTML = "";
          isOpened = false;
     }
     else{
          logoTwo.classList.add('disappear');
          logoOne.classList.add('logoOne');
          logoThree.classList.add('logoThree');
          coverPage.classList.add('menu-item')
          isOpened = true;
          coverPage.innerHTML = `          <ul>
          <li>          <a href="">HOME</a>
          </li>
          <li><a href="">SERVICE</a>     
          </li>
          <li><a href="">ABOUT</a>     
          </li>
          <li><a href="">CONTACT US</a>     
          </li>
     </ul>`;
     }

}

menuLogo.addEventListener('click' , menuLogoFunction);