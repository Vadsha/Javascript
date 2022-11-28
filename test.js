// console.log("hi");
// let x = 10;      
    /*condition check*/
// if (x == 10) {
//     console.log("x is 10");
// }
// else if (x == 10 && x < 10) {
//     console.log("x is 10");
// }
// else{
//     console.log("x is less than 10");
// }

// let x = 10;                          /*AND gate OR gate */
// if (x == 20 || x > 20) {
//     console.log("ok");
// }
// else if (x == 10 && x > 0) {
//     console.log("GG");
// }
// else{console.log("Error");}

// alert("warning!!!!");


// ES 5 Function
// function me(name,age){
//     console.log(name,age);
// }
// me("Vaddshah",20);

// let myname = function(name,age){
//     console.log(name,age);
// }
// myname("Zwe Zar Ni",20);


// ES 6 Function
// let myname =(name,age)=>{console.log(name,age);}
// myname("zwezarni",20);

// let empty = (name) =>"hi "+name;
// let result = empty("mg mg");
// console.log(result);


// Arrays
// let bios = ["Zwe Zar Ni",19,"Student"];
// console.log(bios.length);   /*view array length */
// console.log(bios);
// bios[3]="Male";     /*insert array */
// console.log(bios[3]);
// console.log(bios);
// bios[1]=20;         /*override array */
// console.log(bios);


// let mybios=[];
// let insertdata =(name,age,job)=>{
//     mybios.push(name);
//     mybios.push(age);
//     mybios.push(job);}
// insertdata("vaddshah",20,"student");
//                 OR
// let insertdata =(name,age,job)=>{
//     mybios.unshift(name);
//     mybios.unshift(age);
//     mybios.unshift(job);}
// insertdata("vaddshah",20,"student");
// console.log(mybios);

// let number =(a,b,...c)=>{console.log(c);}   /*rest parameter */
// number(2,3,4,5,6,7);


// let name = "vaddshah";
// function greet(){
//     console.log(`${name}`);
// }
// greet();



// let x;
// if(x == 5){
//     console.log('x is 5');
// }
// else if (x > 5) {
//     console.log('x is greater than 5'); 
// }
// else if (x < 5) {
//     console.log('x is less than 5'); 
// }
// else{console.log('nothing!!!');}


// function functionName(name){
//     alert(name);
// }
// functionName('Zwe Zar Ni');

// let hello = (name) => {alert(name);}
// console.log(hello('fgfgfgfgfg'));

// let array = [1,2,3];
// console.log(array);
// array[3] = 4;
// console.log(array);
// array[0] = 0;
// console.log(array);

// let array = [];
// let ins =(one,two,three,four)=>{
//     array.push(one);
//     array.push(two);
//     array.push(three);
//     array.unshift(four);
// }
// ins(1,2,3,0);
// console.log(array);

// function hello(){
//     if (true) {
//         var a = "this is var";
//         let b = "this is let";
//         const c = "this is const";
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log('this is from the outside');
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// hello();

// let data = [];

// insert =()=>{
//     data.push(1);
//     data.push(2);
//     data.push(3);
//     data.push(4);
// }
// insert();
// console.log(data);

 

// innerHTML
// let answer1='answer1';
// let answer2='answer2';
// let answer3='answer3';
// document.getElementById("test").innerHTML =answer1 + "<br>" + answer2 + "<br>" + answer3;

// Object
// let fun = {
//     name : "vaddshah raduv",
//     age : 20,
//     gender : "male",
//     getname(){
//         let a = 10;
//         return this.name + a;
//     }
// };
// console.log(fun.getname());
// console.log(fun.name);
// console.log(fun.age);
// console.log(fun.gender);

//  let date = new Date();
// document.write(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + "<br>");
// document.write(Math.floor(Math.random() * 10));

// function bios(name,age){
//     this.name = name;
//     this.age = age;
// }
// let data = new bios("vaddshah",19);
// console.log(data.name);
// let data = [
//     {name:"vaddshah",age:19},
//     {name:"raduv",age:20},
//     {name:"Mee Ngae",age:18},
// ];
// console.log(data);
// data.forEach((da)=>{console.log(da.name);});

// function bios(name,age){
//     this.name = name;
//     this.age = age;
// }

// let datas = [1,2,3,4];
// console.log(datas);
// let newdata = datas.map((data)=>{
//     return data + 1;
// });
// console.log(newdata);

// let datas =[1,2,3,4,5];
// datas.forEach((data)=>{
//     console.log(data);
// })

// function Bio(name,age){
//     this.name = name;
//     this.age = age;
// }
// let bio = new Bio("vaddshah",20);
// console.log(bio);
// function bio(){
//     return this;
// }
// let Bio = new bio();
// console.log(Bio);

// SWITCH
// let f = 10; 
// switch (f) {
//     case 9:
//         console.log('this is 9');
//         break;
//     case 10:
//         console.log('this is 10');
//     break;

//     default:
//         console.log('none');
//         break;
// }

// FILTER
// let data = [
//     {name:"vaddahah",age:20},
//     {name:"meengae",age:19},
//     {name:"kratos",age:20},
//     {name:"athena",age:19},
// ]
// let filteredData = data.filter((filtered)=>{
//     return filtered.age == 20;
// });
// console.log(filteredData);

// let god = confirm('this is god!');
// if(god){
// console.log("this is god");
// }

// let name = prompt('your name?');
// if (name == 'vaddshah') {
//     confirm('is this really u?');
// }
// else{confirm('go somewhere else!!');}

// class Parent{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greeting(){
//         return 'HELLO!!!';
//     }
// }
// class Child extends Parent{
//     constructor(name,age,job){
//         super(name,age);
//         this.job = job;
//     }
// }
// let parent = new Parent('vaddshah',20);
// let child = new Child('vaddshah',20,'web');
// console.log(child);
    // let i = 0;
    // setInterval(() => {
    //     i+=1;
    //     document.write(i);
    // }, 1000);
// function change(){
//     document.write('hello world!!!')
// }

// let cls ={
//     name:"vaddshah",
//     age:20,
//     job:"jobless"
// }

// let ar =[
//     {name:"vaddshah"},
//     {name:"athena"},
//     {name:"zwe zar ni"},
//     {name:"suu myat moe"},
//     {name:"ko kp"},
//     {name:"meengae"}
// ];
// let names=(personName)=>{
//     console.log("your name is :", personName);
// }
// for (let i = 0; i < ar.length; i++) {
//     personNames = ar[i].name;
//     names(personNames);
// }

// let array=[
//     {name:"vaddshah",age:20,rs:"married",partner:"athena"},
//     {name:"zwe zar ni",age:21,rs:"in a relationship",partner:"suu myat moe"},
//     {name:"ko ko",age:22,rs:"have kids",partner:"mee nage"},
//     {name:"Daddy",age:23,rs:"cherich",partner:"bae"}
// ];
// for(let i = 0; i < array.length; i++){
//     let ind = array[i];
//     for(let obj in ind){
//         console.log(obj , ind[obj]);
//     }
// }
// let data =prompt("a number between 1 and 100");
// parseInt(data);
// while(data > 100 || data < 1){
//     prompt("a number between 1 and 100");
// }


// let exit = true;  /*while loop */
// while (exit) {
//     let data = prompt("enter a number between 1 and 100");
//     let pdata = parseInt(data);
//     if (pdata > 1 && pdata <100) {
//         document.write("the number is :", pdata);
//         exit = false;   /* ((EXIT CONDITION))  VERY IMPORTANT TO MAKE THE CONDITION FLASE*/
//     }
// }

//         Error Handling
// let array = [1,2,3,4,5];
// let a = () =>{
//     for(const i = 0; i <array.length; i++){
//         console.log(array[i]);
//     }
// }
// let b = () =>{
//     console.log("this is the message from B");
// }
// let c = () =>{
//     console.log("this is the message from C");
// }
// try{
//     a();
// }
// catch(error){
//     console.log(error);
// }
// b();
// c();

        // Continue & break
// let a = [
//     {name:"vaddshah",age:20,gender:"male"},
//     {name:"suu myat moe",age:20,gender:"female"},
//     {name:"vaddshah2",age:20,gender:"male"},
//     {name:"athena",age:20,gender:"female"},
//     {name:"vaddshah3",age:20,gender:"male"}
// ]
// for(let i = 0; i < a.length; i++){
//     if (a[i].gender === "female") {
//         continue;
//     }
//     console.log(a[i].name);
// }    
// for(let i = 0; i < a.length; i++){
//     if (i === 3) {
//         break;
//     }
//     console.log(a[i].name);
// }

// let me = {name:"vaddshah",age:20,gender:"male"};
// let { name, age, gender} = me;
// console.log(name,age,gender);
// let copyObject = {...me};
// console.log(copyObject);

// let array = [1,2,3,4,5,6];
// let [one,two,three, ,five,six] = array;
// console.log(one,two,three,five,six);
// let copyArrray = [...array];
// console.log(copyArrray);

// let fun = (a,b,...c) =>{
//     console.log(a,b);

//     for(let i = 0; i < params.length; i++){
//         console.log(c[i]);
//     }
// }
// fun(1,2,3,4,5,6);

// let a = [1,2,3,4,5];
// let number =(num) =>{
//     return num >=3;
// }
// let b = a.filter(number);
// console.log(b);

// let a = [1,2,3,4,5];
// let res = a.filter(num => num > 3);
// console.log(res);


// let a = [1,2,3,4,5];
// let b = a.map(num => num +5);        All in callback
// let number = num => num + 3;         With an Outer Function
// let b = a.map(number);
// console.log(b);


                        // DOM
                    // CRUD
                // CREATE
// const divElement = document.createElement('div');
// const textNode = document.createTextNode('goodbye world!');
// divElement.appendChild(textNode);
// const bodyElement = document.getElementsByTagName('body')[0];
// bodyElement.appendChild(divElement);

                // READ
// const readDivElement = document.getElementsByTagName('div')[0];
// console.log(readDivElement.textContent);

                // UPDATE
// readDivElement.textContent = "i am dying!";
// console.log(readDivElement.textContent);

                // DELETE
// readDivElement.remove();

// const divElement = document.createElement('div');
// const textNode = document.createTextNode('good bye world!');
// divElement.appendChild(textNode);
// const bodyElement = document.getElementsByTagName('body')[0];
// bodyElement.appendChild(divElement);

// const read = divElement.textContent;
// console.log(read);

// const update = divElement.textContent = "i am really dying!!!";
// console.log(update);

// divElement.remove();

// const parent = document.getElementsByClassName('parent')[0];
// parent.innerHTML = '';

// const bodyElement = document.getElementsByTagName('body')[0];

// const divElement = document.createElement('div');
// divElement.classList.add('parent');
// divElement.classList.remove('parent');
// const one = document.createElement('div');
// one.classList.add('one');
// one.append('goodbye world');
// const two = document.createElement('div');
// two.classList.add('two');
// two.append('I am dying!!!');
// divElement.append(one,two);
// bodyElement.appendChild(divElement);


                //READING EXTERNAL CSS FILE
// const divElement = document.getElementsByClassName('style')[0];
// const width = getComputedStyle(divElement).width;
// const height = getComputedStyle(divElement).height;
// const backgroundColor = getComputedStyle(divElement).backgroundColor;
// console.log(width , height , backgroundColor);

// const bodyElement = document.getElementsByTagName('body')[0];

// const divElement = document.createElement('div');
// divElement.classList.add('parent');
// const childOne = document.createElement('div');
// childOne.classList.add('one');
// const childTwo = document.createElement('div');
// childTwo.classList.add('two');
// childOne.append('I am dying !!!');
// childTwo.append('goodbye world!');
// divElement.append(childOne,childTwo);
// bodyElement.appendChild(divElement);
 

// const bodyElement = document.getElementsByTagName('body')[0];
// const divElement = document.createElement('div');
// divElement.classList.add('parent');
// divElement.append('this is the crud');
// bodyElement.appendChild(divElement);

// const reading = document.getElementsByTagName('div')[0];
// console.log(reading.textContent);

// reading.textContent = "the message has been changed";

// divElement.remove();

// const divElement = document.getElementsByClassName('style')[0];
// const width = getComputedStyle(divElement).width;
// console.log(width);

            // Corosel
// const myButton = document.getElementById('button');
// const image = document.getElementById('image');
// const original = image.src;
// const array = [
//     'https://images.unsplash.com/photo-1666045884678-1720af323a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1666167494306-af347c4f0fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1666202591205-c59759fa9ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1666059368813-3b84b929e28d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
//     'https://images.unsplash.com/photo-1666189328542-350558623f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
// ]
// let counter = 0;
// myFunction = () =>{
//     if (counter === 5) {
//         image.src = original;
//         counter = 0;
//         return;
//     }
//     image.src = array[counter];
//     counter++;
// }
// myButton.addEventListener('click' , myFunction);

            // Shopping Cart
// const input = document.getElementsByClassName('input')[0];
// const shopping = document.getElementsByClassName('shopping')[0];

// let id = 1;

// const showGoods = (event) =>{
//     const text  = event.target.value;
//     const parent = document.createElement('div');
//     parent.classList.add('parent');
//     const product = document.createElement('div');
//     product.classList.add('product');
//     const goods = document.createElement('span');
//     goods.classList.add('goods');
//     const icon = document.createElement('button');
//     icon.classList.add('icon');
//     const value = id + ". " + text;
//     goods.append(value);
//     icon.append('delete');
//     product.append(goods,icon);
//     parent.appendChild(product);
//     shopping.append(parent);
//     const deleteFunction = (event) =>{
//         product.remove();
//     }
//     icon.addEventListener('click' , deleteFunction);
//     event.target.value = "";
//     id +=1;
// }
// input.addEventListener('change' , showGoods);


            //MusicPlayer
// const songList = document.getElementsByClassName('songList')[0];
// const audio = document.getElementsByTagName('audio')[0];
// const currentAndTotleTime = document.getElementsByClassName('currentAndTotleTime')[0];
// const currentProgress = document.getElementById('currentProgress');
// const playButton = document.getElementsByClassName('playButton')[0];
// const pauseButton = document.getElementsByClassName('pauseButton')[0];
// const previousButton = document.getElementsByClassName('previousButton')[0];
// const nextButton = document.getElementsByClassName('nextButton')[0];


// const songs = [
//     {trackId : "music/Post_Malone_Better_Now.mp3" , name : "Better Now"},
//     {trackId : "music/Post_Malone_Circles.mp3" , name : "Circles"},
//     {trackId : "music/Post_Malone_Sunflower.mp3" , name : "Sunflower"},
//     {trackId : "music/Post_Malone_Wow_.mp3" , name : "Wow"}
// ];

// for(i = 0; i < songs.length; i++){

//     const track = document.createElement('div');
//     track.classList.add('items');
//     const title = (i + 1).toString() + ". " + songs[i].name;
//     const trackID = songs[i].trackId;
//     track.textContent = title;
//     songList.append(track);
//     track.addEventListener('click' , () =>{
//         audio.src = trackID;
//         audio.play();

//     } );

//     let duration = 0;
//     let totalDuration = "00:00";
//     audio.addEventListener('loadeddata' , () =>{
//         duration = Math.floor(audio.duration);
//         totalDuration = timeFunction(duration);

//     });
//     let timeUpdate = 0;
//     audio.addEventListener('timeupdate' , () =>{
//         timeUpdate = Math.floor(audio.currentTime);
//         const currentTime = timeFunction(timeUpdate);
//         currentAndTotleTime.textContent = currentTime + ' / ' + totalDuration;
//         progressFunction(currentTime);
//     })
//     const progressFunction =(currentTime) =>{
//         progressBar = (500/duration) * timeUpdate;
//         currentProgress.style.width = progressBar.toString() + "px";

//     }

//     const timeFunction = (time) =>{
//         const minutes = Math.floor(time / 60);
//         const seconds = time % 60;
//         const totalMinutes = minutes < 10 ? "0" + minutes : minutes;
//         const totalSeconds = seconds < 10 ? "0" + seconds : seconds;
//         return totalMinutes + ":" + totalSeconds;
//     }

//     let songToPlay = 0;
//     playButton.addEventListener('click' , () =>{
//         if (timeUpdate === 0) {
//             audio.src = songs[songToPlay].trackId;
//             audio.play();
//         }
//         else{
//             audio.play();
//         }
//     })
//     pauseButton.addEventListener('click' , () =>{
//         audio.pause();
//     })
//     previousButton.addEventListener('click' , () => {

//     })
// }

// const print = (string) =>{
//     console.log(string);
// }
// print('goodbye world');

                // Auto Complete
// const products = [
//     {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 120
//     }
//     },
//     {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//     "rate": 4.1,
//     "count": 259
//     }
//     },
//     {
//     "id": 3,
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     "rating": {
//     "rate": 4.7,
//     "count": 500
//     }
//     },
//     {
//     "id": 4,
//     "title": "Mens Casual Slim Fit",
//     "price": 15.99,
//     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     "rating": {
//     "rate": 2.1,
//     "count": 430
//     }
//     },
//     {
//     "id": 5,
//     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     "price": 695,
//     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//     "rate": 4.6,
//     "count": 400
//     }
//     },
//     {
//     "id": 6,
//     "title": "Solid Gold Petite Micropave ",
//     "price": 168,
//     "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 70
//     }
//     },
//     {
//     "id": 7,
//     "title": "White Gold Plated Princess",
//     "price": 9.99,
//     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//     "rate": 3,
//     "count": 400
//     }
//     },
//     {
//     "id": 8,
//     "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     "price": 10.99,
//     "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//     "rate": 1.9,
//     "count": 100
//     }
//     },
//     {
//     "id": 9,
//     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     "price": 64,
//     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     "rating": {
//     "rate": 3.3,
//     "count": 203
//     }
//     },
//     {
//     "id": 10,
//     "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     "price": 109,
//     "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     "rating": {
//     "rate": 2.9,
//     "count": 470
//     }
//     },
//     {
//     "id": 11,
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     "price": 109,
//     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     "rating": {
//     "rate": 4.8,
//     "count": 319
//     }
//     },
//     {
//     "id": 12,
//     "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     "price": 114,
//     "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     "rating": {
//     "rate": 4.8,
//     "count": 400
//     }
//     },
//     {
//     "id": 13,
//     "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     "price": 599,
//     "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     "rating": {
//     "rate": 2.9,
//     "count": 250
//     }
//     },
//     {
//     "id": 14,
//     "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     "price": 999.99,
//     "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     "rating": {
//     "rate": 2.2,
//     "count": 140
//     }
//     },
//     {
//     "id": 15,
//     "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     "price": 56.99,
//     "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     "rating": {
//     "rate": 2.6,
//     "count": 235
//     }
//     },
//     {
//     "id": 16,
//     "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     "price": 29.95,
//     "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     "rating": {
//     "rate": 2.9,
//     "count": 340
//     }
//     },
//     {
//     "id": 17,
//     "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     "price": 39.99,
//     "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     "rating": {
//     "rate": 3.8,
//     "count": 679
//     }
//     },
//     {
//     "id": 18,
//     "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     "price": 9.85,
//     "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     "rating": {
//     "rate": 4.7,
//     "count": 130
//     }
//     },
//     {
//     "id": 19,
//     "title": "Opna Women's Short Sleeve Moisture",
//     "price": 7.95,
//     "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     "rating": {
//     "rate": 4.5,
//     "count": 146
//     }
//     },
//     {
//     "id": 20,
//     "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//     "price": 12.99,
//     "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     "category": "women's clothing",
//     "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     "rating": {
//     "rate": 3.6,
//     "count": 145
// }
// }
// ];
// const autoCompleteInput = document.getElementsByClassName('autoCompleteInput')[0];
// const resultContainer = document.getElementsByClassName('resultContainer')[0];
// const selectedContainer = document.getElementsByClassName('selectedContainer')[0];
// let filteredProducts =[];
// autoCompleteInput.addEventListener('keyup' , (event) =>{
//     console.log(event.key);
//     if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key ==="Enter") {
//         navigateProduct(event.key);
//         return;
//     }
//     resultContainer.textContent = "";
//     const searchText = event.target.value.toLowerCase();
//     filteredProducts = products.filter(product =>{
//         return product.title.toLowerCase().includes(searchText);
//     });
//     if (searchText.length === 0) {
//         return;
//     }
//     const productsToShow = filteredProducts.length > 0;
//     if (productsToShow) {
//         for (let i = 0; i < filteredProducts.length; i++) {
//             const productItem = document.createElement('div');
//             productItem.id = filteredProducts[i].id;
//             productItem.classList.add('productItem');

//             const productItemTitle = document.createElement('div');
//             productItemTitle.append(filteredProducts[i].title);
//             productItemTitle.classList.add('productItemTitle');


//             const productItemImage = document.createElement('img');
//             productItemImage.src = filteredProducts[i].image;
//             productItemImage.classList.add('productItemImage');

//             productItem.append(productItemTitle , productItemImage);
//             resultContainer.append(productItem);
//         }
//     }
    
// });

// let indexToSelect = -1;
// const navigateProduct = (key) =>{
    
//     const selectFunction = (indexToSelect) =>{
//         let selectedProductId = filteredProducts[indexToSelect].id.toString();
//         let selectedProduct = document.getElementById(selectedProductId);
//         selectedProduct.style.backgroundColor = "#206FFE";
//         selectedProduct.style.color = "white";
//         return selectedProduct;
//     }
//     const deselectFunction = () =>{
//         const indexToDeselect = document.getElementsByClassName('selected')[0];
//         indexToDeselect.style.backgroundColor = "white";
//         indexToDeselect.style.color = "black";
//         indexToDeselect.classList.remove('selected');
//     }

//     if (key === "ArrowDown") {
//         if (indexToSelect === filteredProducts.length - 1) {
//             indexToSelect = -1;
//             deselectFunction();
//             return;
//         }
//         indexToSelect += 1;
//         const selectedProductFromFunction = selectFunction(indexToSelect);

//         if (indexToSelect > 0) {
//             deselectFunction();
//         }
//         selectedProductFromFunction.classList.add("selected");
        
//     }

//     else if (key === "ArrowUp") {
//         if (indexToSelect === -1) {
//             return;
//         }
//         if (indexToSelect === 0) {
//             indexToSelect = -1;
//             deselectFunction();
//             return;
//         }

//         indexToSelect -= 1;
//         deselectFunction();
//         const selectedProductFromFunction = selectFunction(indexToSelect);
//         selectedProductFromFunction.classList.add("selected");

//     }

//     else{
//         const enteredProduct = selectFunction(indexToSelect);
//         console.log(enteredProduct.title);
//         enteredProduct.classList.add('enteredProduct');
//         resultContainer.remove();   
//         selectedContainer.append(enteredProduct);
//     }
// };


            //Template Literals
// const bodyElement = document.getElementsByTagName('body')[0];
// bodyElement.innerHTML = `<div class="container">
// <div class="card col-6">
//     <div class="card-header">
//         <h1>Good Bye World</h1>
//     </div>
//     <div class="card-header">
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eos non minus sunt architecto quo similique. Maiores totam culpa explicabo, accusantium repellat, blanditiis beatae facere voluptatum quisquam error sunt nulla.</p>
//     </div>
//     <div class="card-footer">
//         <button class="btn btn-primary">
//             Submit
//         </button>
//     </div>
// </div>
// </div>`;


                // Toast Alert+LocalStorage
// const alertMessage = document.querySelector('.alertMessage');

// const alertFunction = () =>{
//     alertMessage.innerHTML =  "";
//     const alertTag = document.createElement('div');
//     alertTag.classList.add('alertTag');
//     alertTag.append('Accept the cookies or your mom dies...');
//     const btnTag = document.createElement('button');
//     btnTag.classList.add('btnTag' , 'btn' , 'btn-success', 'btn-sm');
//     btnTag.style.top = '-32px';
//     btnTag.append('click');
//     btnTag.addEventListener('click',()=>{
//         localStorage.setItem('accepted' , 'zwe zar ni');
//         alertMessage.style.bottom = `-${alertTag.offsetHeight}px`;
//     });
//     alertMessage.append(alertTag , btnTag);
//     alertTag.style.bottom = `-${btnTag.offsetHeight}px`;
//     alertTag.style.bottom = '0px';

// }

// window.addEventListener('load' , ()=>{
//     const theKey = localStorage.getItem('accepted');
//     if (theKey !== "zwe zar ni") {
//         alertFunction();
//     }
// })

            //JSON(Javascript Object Notation)
            //Valid JSON DataTypes(string , number , Boolean , json Object , array , null)
            //Javascript data type --> json string = serialization
            //json string --> Javascript data type = deserialization
// const jsObj = {
//     name : "vaddshah",
//     email : "vaddshah@gmail.com",
//     gender : "male",
//     isMarried : false
// };
// console.log(typeof jsObj);
// localStorage.setItem('profileInJs' , jsObj);
// const convertedToJSON = JSON.stringify(jsObj);
// localStorage.setItem('profile' , convertedToJSON);
// const dataInLocalStorage = localStorage.getItem('profile');
// const objectFromLS = JSON.parse(dataInLocalStorage);
// console.log(objectFromLS);
// console.log(typeof convertedToJSON);
// const parsedJsObj = JSON.parse(convertedToJSON);
// console.log(typeof parsedJsObj);

// const jsArray = [1,2,3,4,5,6];
// console.log(typeof jsArray);
// const convertedToJSON = JSON.stringify(jsArray);
// console.log(typeof convertedToJSON);
// const backTojsArray = JSON.parse(convertedToJSON);
// console.log(typeof backTojsArray);

                //Sorting
// const array = [1,3,5,7,9,2,4,6,8,0];
// console.log(array.sort((a , b) => a - b));

// const array = ['abc' , 'def' , 'ghi' , 'dfe' , 'gih' , 'jkl' , 'mno' , 'acb' , 'jlk' , 'mon']
// console.log(array.sort());

// const array = [
//     {name:"zwezarni",age:20},
//     {name:"suumyatmoe",age:19},
//     {name:"kyawyelin",age:21},
//     {name:"ngaengae",age:18}
// ];
// const sortedWithAge = array.sort((a , b) => a.age - b.age);
// console.log(sortedWithAge);
// const sortedWithName = array.sort((a , b) => a.name.localeCompare(b.name) );
// console.log(sortedWithName);


                                //Changing input value
//     document.getElementById('price').value = 0;
// let inputTag = document.getElementById('price').value;
// inputTag = 0;
// const minusBtn = document.getElementsByClassName('minusBtn')[0];
// const plusBtn = document.getElementsByClassName('plusBtn')[0];
// plusBtn.addEventListener('click' , () => {
//     inputTag = inputTag + 1;
//     document.getElementById('price').value = inputTag;

// });
// minusBtn.addEventListener('click' , () => {
//     if (inputTag == 0) {
//         return;
//     }
//     else{
//         inputTag = inputTag - 1;
//         document.getElementById('price').value = inputTag;
//     }
// });


                                        // Promise

// const loginData = new Promise((resolve , reject) =>{
//     setTimeout(()=>{
//         reject('Login has finished');
//     } , 3000)
// });
// loginData.then((para) => {
//     console.log(para);
// }).catch((para) => {
//     console.log(para);
// });

// const data = true;
// const loginData = () => {
//      return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('login has finished');
//             },3000);
//         }
//         else{
//             reject('your data is incorrect!');
//         }
//     });
// }
// const showData = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve('data is ready....');
//         } , 3000);
//     });
// }
// const feedback = () => {
//     alert('do you enjoy conding in javascript?');
// }
// loginData().then((message) => {
//     console.log(message);
//     showData().then((message) => {
//         console.log(message);
//         feedback();
//     }).catch((message) => {
//         console.log(message);
//     })
// }).catch((message) => {
//     console.log(message);
// })

                                // Promise Chaining
                                
// const data =true;
// const loginData = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Login has completed...');
//             } , 2500)
//         }
//         else{
//             reject('Please try again...');
//         }
//     })
// }
// const showData = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Data has arrived...');
//             } , 2500)
//         }
//         else{
//             reject('Try reloading page again');
//         }
//     })
// }
// const feedback = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Do you like coding in javascript?');
//             } , 2500)
//         }
//         else{
//             reject('Try reloading page again');
//         }
//     })}

// loginData().then((message) => {
//     console.log(message);
//     return showData();
// })
// .then((message) => {
//     console.log(message);
//     return feedback();
// })
// .then((message) => {
//     console.log(message);
// })
// .catch((message) => {
//     console.log(message);
// })

                        // async/await

// const data = true;
// const loginData = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Login has completed...');
//             } , 2500)
//         }
//         else{
//             reject('Please try again...');
//         }
//     })
// }
// const showData = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Data has arrived...');
//             } , 2500)
//         }
//         else{
//             reject('Try reloading page again');
//         }
//     })
// }
// const feedback = () => {
//     return new Promise((resolve , reject) => {
//         if (data) {
//             setTimeout(() => {
//                 resolve('Do you like coding in javascript?');
//             } , 2500)
//         }
//         else{
//             reject('Try reloading page again');
//         }
//     })}

// const promiseFunction = async () => {
//     const login = await loginData();
//     console.log(login);
//     const dataToShow = await showData();
//     console.log(dataToShow);
//     const feedbackTag = await feedback();
//     console.log(feedbackTag);

// }
// promiseFunction().catch((errrorMessage) => {
//     alert(errrorMessage);
// });


                            // Fetch Api

// const resource = "https://fakestoreapi.com/products";
// fetch(resource)
// .then((response) => {
//     const responseData = response.json();
//     return responseData;
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((errorMessage) => {
//     alert(errorMessage);
// })

// const fetchFunction = async () => {
//     const fetched = await fetch(resource);
//     const responseData = await fetched.json();
//     console.log(responseData);
// }
// fetchFunction();

                    // Throw Error
// const userFunction = (user) => {
//     if (!user.name || !user.email) {
//         throw new Error('this is the error message!');
//     }
//     return "the function is succeeded...";
// }
// const user ={name:"Zwe Zar Ni"};
// try{
//     const register = userFunction(user);
//     console.log(register);
// }
// catch(error){
//     console.log(error);
// }

// console.log('this is the rest of the codes...');
// const error = new Error('this is the error message!!!');
// console.log(error.message);