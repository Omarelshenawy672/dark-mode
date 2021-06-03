let btnDark = document.getElementById('dark');
let btnLight = document.getElementById('light');

let div =document.getElementById('mainDiv');


btnDark.onclick = function(){
   document.body.style.background ="#111";    
    div.style.color ="#eee";
    btnLight.style.background="#eee"
}
let light =()=>{
    document.body.style.background ="#eee";    
    div.style.color ="#111";
}
btnLight.addEventListener('click',light)