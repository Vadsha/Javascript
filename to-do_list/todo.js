const dateInput = document.querySelector('.dateInput');
const listInput = document.querySelector('.listInput');
const items = document.querySelector('.items');
const audioTag = document.querySelector('.audio');

let number = 0;     //For the key in localStorage

let listTarget;     //value in localStorage
listInput.addEventListener('change' , (event) =>{
     if (number >= localStorage.length) {
          number += 1 ;
     }
     else{
          number = localStorage.length + 1;      //to get continuous number keys in localStorage
     }
     listTarget =event.target.value;
     items.innerHTML = "";                 // not to get nested items  
     localStorage.setItem(number,listTarget);
     appendFunction();
     number++;                              //To get a continuous number in key(localStorage)
     event.target.value = "";
});

const appendFunction = () =>{
     for (let i = 1; i <= 100; i++) {
          const values = localStorage.getItem(i);
          const orderedValue =values;
          const valueTag = document.createElement('div');
          valueTag.classList.add('valueTag');

          const deleteBtn = document.createElement('div');
          deleteBtn.append('delete');
          deleteBtn.classList.add('deleteBtn' , 'btn' , 'btn-danger' , 'btn-sm');
          const succeedBtn = document.createElement('div');
          succeedBtn.append('done');
          succeedBtn.classList.add('succeedBtn' , 'btn' , 'btn-success' , 'btn-sm' , 'ms-2');
          const btnContainer = document.createElement('div');
          btnContainer.classList.add('btnContainer');
          btnContainer.append(deleteBtn , succeedBtn);

          if (localStorage.getItem(i) == null) {
               continue;
          }
          valueTag.append(orderedValue , btnContainer);
          items.append(valueTag);

          const removeFunction = () => {             //For removing Item Tag
               localStorage.removeItem(i);
               valueTag.remove();
               }
          deleteBtn.addEventListener('click' , () => {
               audioTag.src = "sound_effects/Mission_Failed_we'll_get_em_next_time_Sound_Effect(128k).mp3";
               audioTag.play();
               
               setTimeout(removeFunction , 3000);
          });
          succeedBtn.addEventListener('click' , () => {
               audioTag.src = "sound_effects/Yayyy!_Sound_Effect(128k).mp3";
               audioTag.play();
               setTimeout(removeFunction , 3000);
          });
     }

}
appendFunction();