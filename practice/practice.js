
                    //Welcome to Hell

const bodyTag = document.getElementsByTagName('body')[0];
const darkMode = document.getElementsByClassName('darkMode')[0];
const darkModeButton = document.getElementsByTagName('button')[0];
const ulTag = document.getElementsByTagName('ul')[0];
const menuBar = document.getElementsByClassName('menuBar')[0];
const aboutCOC = document.getElementsByClassName('aboutCOC')[0];
const home = document.getElementById('home');
const heroesPart = document.getElementById('heroes');
const troopsPart = document.getElementById('troops');
const superPart = document.getElementsByClassName('super')[0];
const spellsPart = document.getElementById('spells');
const machinesPart = document.getElementById('machines');
const petsPart = document.getElementById('pets');

const tabs = ['home' , 'heroes' , 'troops' , 'super troops' , 'spells' , 'machines' , 'pets'];

               //Dark Mode
let darkmode = false;
const colorChanging = (color) =>{
     ulTag.style.color = color;
     darkModeButton.style.color = color;
     aboutCOC.style.color = color;
     heroesPart.style.color = color;
     troopsPart.style.color = color;
     superPart.style.color = color;
     spellsPart.style.color = color;
     machinesPart.style.color = color;
     petsPart.style.color = color;

}

if (localStorage.getItem('darkMode')  == "true") {
     bodyTag.style.backgroundColor = '#303030';
     ulTag.style.backgroundColor = '#34373B';
     colorChanging('gold');
     darkmode = true;
}
darkMode.addEventListener('click' , () =>{
     if (darkmode == true) {
          localStorage.setItem('darkMode' , "false");
          bodyTag.style.backgroundColor = "white";
          ulTag.style.backgroundColor = '#DADBEF'
          colorChanging('black');
          darkmode = false;
     }
     else{
          localStorage.setItem('darkMode' , 'true');
          bodyTag.style.backgroundColor = "#303030";
          ulTag.style.backgroundColor = '#34373B';
          colorChanging('gold');
          darkmode = true;
     }
})

for (let i = 0; i < tabs.length; i++) {
     const liTag = document.createElement('li');
     liTag.classList.add('liTag');
     liTag.id = i;
     liTag.append(tabs[i].toUpperCase());
     ulTag.append(liTag);
     liTag.addEventListener('click' , () =>{
          let liOffSetWidth = liTag.offsetWidth;
          let liOffSetLeft = liTag.offsetLeft;
          menuBar.style.width = liOffSetWidth + 'px';
          menuBar.style.transform = `translateX(${liOffSetLeft}px)`;
          const tabToShow = `#${tabs[liTag.id]}`;
          const aTag = document.createElement('a');
          aTag.href = tabToShow;
          aTag.click();
     })
}

                         //Viewing Details about troops
const aboutKing = document.getElementsByClassName('aboutKing')[0];
const seeKing = document.getElementsByClassName('seeKing')[0];

let clickedSeeBtn = false;
seeKing.addEventListener('click' , () => {
     if (clickedSeeBtn) {
          aboutKing.innerHTML = `<p class="aboutTroopsthings aboutKing">The Barbarian King is the first hero unlocked at Town Hall level 7. He is a larger, stronger, more aggressive, more impressive, and more powerful Barbarian. He is automatically summoned once the Barbarian King Altar is constructed, which costs 5,000 Dark Elixir. So, the Dark Elixir Storage is required to get him.The Barbarian King is the first hero unlocked at Town Hall level 7. He is a larger, stronger, more aggressive, more impressive, and more powerful Barbarian. He is automatically summoned once the Barbarian King Altar is constructed, which costs 5,000 Dark Elixir. So, the Dark Elixir Storage is required to get him.The Barbarian King is the first hero unlocked at Town Hall level 7. He is a larger, stronger, more aggressive, more impressive, and more powerful Barbarian. He is automatically summoned once the Barbarian King Altar is constructed, which costs 5,000 Dark Elixir. So, the Dark Elixir Storage is required to get him.`;
          clickedSeeBtn = false;
     }
     else{
          aboutKing.innerHTML = `<ul style="background-color:transparent; margin-left:20px; font-size: 20px;">
          <li >Unlock = TownHall 7</li>
          <li>Max level = 80</li>
          <li>Strength = Hit Point</li>
          <li>Target = Ground</li>
          <li>Ablitiy = Haste</li>
          <li>Upgrade Duration = 6h to 12days</li>
          <li>Skins = 6</li>
     </ul>`;
          clickedSeeBtn = true;
     }
})