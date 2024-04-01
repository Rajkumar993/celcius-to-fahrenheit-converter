const celsius=document.getElementById('input');
const result=document.getElementById('text');
const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
 result.value=Math.floor((Number(celsius.value)*9/5)+32)+" "+'fahrenheit'
})

const letters='qwertyuiopasdfghjklzxcvbnm'
const results=Math.floor(Math.random()*letters.length);

console.log(letters.charAt(results))