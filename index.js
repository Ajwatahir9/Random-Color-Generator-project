const button = document.getElementById('btn')
button.addEventListener('click',function(e){

const hexcode = "0123456789ABCDEF";
let color = "#";
for(let i = 0; i <6; i++){
    color = color+hexcode[Math.floor(Math.random()*16)];
}


    document.body.style.backgroundColor=color;
    document.getElementById('hexcode').textContent = color;
})