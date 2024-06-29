let cel=document.getElementById("cel");
let fah=document.getElementById("fah");
let kal=document.getElementById("kal");

cel.addEventListener('input',function(){
    let c = this.value;
    let f=(c*9/5)+32;
    let k=(c*1)+273.15;
if(!Number.isInteger(f)){
    f=f.toFixed(4);
}
fah.value=f;

if(!Number.isInteger(k)){
    k=k.toFixed(4);
}
kal.value=k;
});

fah.addEventListener('input',function(){
let f = this.value;
let c=(f-32)*5/9;
let k=(f-32)*5/9+273.15;
if(!Number.isInteger(c)){
    c=c.toFixed(4);
}
cel.value=c;

if(!Number.isInteger(k)){
    k=k.toFixed(4);
}
kal.value=k;
});

kal.addEventListener('input',function(){
let k=this.value;
let c=k-273.15;
let f=1.8*(k-273.15)+32;

if(!Number.isInteger(c)){
    c=c.toFixed(4);
}
cel.value=c;

if(!Number.isInteger(f)){
    f=f.toFixed(4);
}
fah.value=f;
});