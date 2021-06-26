var x = 0;
var a = 0;
var n = 0;
var h = 12;
var m = 00;
var s = 0;
var rengler = ['red','yellow','green','gray']
var random = Math.floor(Math.random()*rengler.length)
console.log(rengler[random])
var ses = 'AM';
setInterval(funk,1000)
function funk(){
x+=6;
    saniye.style.transform = "rotate("+x+"deg )"; 
    if (x%360==0) {
        a+=6;
        deqiqe.style.transform = "rotate("+a+"deg )"; 
        if (a%360==0) {
            n+=6;
            saat.style.transform = "rotate("+n+"deg )"; 
        }
    }
}
//elektron
setInterval(dijital,1000)
function dijital() {
if (s<59) {
    s++; 
  secondz.innerHTML = s;
}
if(m<=59){
    minutez.innerHTML=m  + ' : ';
    qirmizi()
}
if(h<24){
    hourz.innerHTML=h   + ' : ';
}
if (s==59){
  s=0;
  m++;
}
if(m>=59){
    m=0;
    h++
}
if(h==24){
    h=0;
}
if (m<10){
    minutez.innerHTML='0' + m  + ' : ';
}
if (h<10){
    hourz.innerHTML ='0'+ h  + ' : ';

}
if (s<10){
    secondz.innerHTML ='0'+ s;

}
}
function qirmizi() {
    if(first.value==h && second.value==m){
       secondz.style.backgroundColor=rengler[random]
       minutez.style.backgroundColor=rengler[random]
       hourz.style.backgroundColor=rengler[random]
    }
    else {
        secondz.style.backgroundColor='black'
        minutez.style.backgroundColor='black'
        hourz.style.backgroundColor='black'
    }
}





