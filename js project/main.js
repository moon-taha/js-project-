var h=document.getElementsByTagName('h1');
h[0].style.color='#7F5283';

var p=document.getElementsByTagName('p');
p[0].style.color='#495C83';

var btn =document.getElementById('btn');

btn.style.padding='12px 16px';
btn.style.border='none';
btn.style.backgroundColor='#495C83';
btn.style.color='#fff';

var c=document.getElementById('card');
c.style.backgroundColor='#C8B6E2';


 btn.addEventListener('click',function(){
 	document.getElementsByClassName('bg')[0].style.backgroundColor='#9A86A4';
    document.getElementById('btn').innerText='Downloading...';
 });
var val=document.getElementById('text');
var btn=document.querySelectorAll('button');

val.style.fontSize='38px';
val.style.color='#2C3639';
val.style.fontWeight='800';
val.style.marginBottom='30px';



btn[1].addEventListener('click',function(){
    val.innerText=parseInt(val.innerText)+1;
   
   var war=parseInt(val.innerText) ; 
if (war>=20) {
    alert('Value reach the maximum level.Please Stop!!!!') ;

}
})

btn[2].addEventListener('click',function(){
    val.innerText=parseInt(val.innerText)-1;
    var war=parseInt(val.innerText) ; 
if (war<=0) {
    alert('Value reach the minimumss level.Please Stop!!!!') ;

}
})

// var b=document.getElementsByClassName('b');

// b[0].addEventListener('click',function(){
//     document.getElementsByClassName('c-modal')[0]
//    .style.display='';
// });
var b=document.getElementsByClassName('b');
    b[0].addEventListener('click',function(){
        document.getElementsByClassName('c-modal')[0].style.display='block';
    });

var x=document.getElementsByClassName('x');
    
    x[0].addEventListener('click',function(){
        document.getElementsByClassName('c-modal')[0].style.display='none';
       
    });
   
     function loading(){
         document.getElementById('preloader').style.display='block';
     }
