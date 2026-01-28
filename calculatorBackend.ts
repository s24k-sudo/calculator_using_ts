const num1 = document.getElementById("num1")as HTMLInputElement;
const num2= document.getElementById("num2")as HTMLInputElement;

const addbtn =document.getElementById("btn1")as HTMLButtonElement;
const subbtn =document.getElementById("btn2")as HTMLButtonElement;  
const mulbtn =document.getElementById("btn3")as HTMLButtonElement;
const divbtn =document.getElementById("btn4")as HTMLButtonElement;

const msg = document.getElementById("msg")as HTMLDivElement;

addbtn.addEventListener("click",()=>
    function add(a:number , b:number):number{
        a= Number(num1.value);
        b=Number(num2.value);
        let sum = a + b;
        msg.innerText="the sum is "+sum;
        return sum;
});
subbtn.addEventListener("click",()=>{
    function sub(a:number , b:number):number{
        a= Number(num1.value);
        b=Number(num2.value);
        let difference = a - b;
        msg.innerText="the difference is "+difference;
        return difference;
    }
});
mulbtn.addEventListener("click",()=>{});    
divbtn.addEventListener("click",()=>{});