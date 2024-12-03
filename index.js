const btn1=document.querySelector('#btn1');
const btn2=document.querySelector('#btn2');
desc1=document.querySelector('.accor-1');
desc2=document.querySelector('.accor-2');
btns=document.querySelectorAll('.btn');
wrp=document.querySelector('.wrapper');
img=document.querySelector('.left-part');
adc=document.querySelector('.adc');
prev=0;
let prevcolor;
flag=0;
desc1.classList.add('tr');

// map event listener to all buttons
btns.forEach((btn)=>{
    btn.addEventListener('click',clickhandler);
});
btn1.style.opacity=1;
colors=['#944852','#1a1a1a','#40566e','#5e89b2','#8c7f76','#5d6160'];
lr=['linear-gradient(196deg,#f1a9a9,#e66767)','linear-gradient(196deg,#4c4c4c,#262626)','linear-gradient(196deg,#8a9fb2,#5f7991)','linear-gradient(196deg,#97afc3,#6789a7)','linear-gradient(196deg,#afa6a0,#8c7f76','linear-gradient(196deg,#aaadac,#838786)'];
adc.style.backgroundColor=colors[0];
btns[0].classList.add('bdr');

function clickhandler(e){
    // console.log('clicked');
    // console.log(e.target.classList[1][1]);
    ind=e.target.classList[1][1];
    if(prev!=ind-1){
    btns.forEach((btn)=>{
        if(btn.classList.contains('bdr'))
        btn.classList.remove('bdr');
    });

    wrp.style.backgroundImage=lr[ind-1];
    img.src=`'images/chair${ind}.png'`;
    adc.style.backgroundColor=colors[ind-1];
    
    // img.style.animation=`shake 0.7s cubic-bezier(${0.36-ind/100},0.07,0.19,0.97) both`;
    if(prev!=ind-1)
        {
            if(flag==0)
            {img.style.animation=`shake 0.7s cubic-bezier(${0.36-ind/100},0.07,0.19,0.97) both`;
                flag=1;
            }
           else{
            flag=0;
            img.style.animation=`shake1 0.7s cubic-bezier(${0.36-ind/100},0.07,0.19,0.97) both`;
           }
        }
    
    e.target.classList.add('bdr');
    prev=ind-1;
    }
}
btn1.addEventListener('click',()=>{
    // console.log('btn1 clicked');
    btn2.style.opacity=0.7;
    btn1.style.opacity=1;
    if(desc2.classList.contains('tr')){
        // desc1.classList.remove('tr');
        desc2.classList.remove('tr');
        desc1.classList.add('tr');
    }
    if(!desc1.classList.contains('tr'))
    desc1.classList.add('tr');
    
     
});

btn2.addEventListener('click',()=>{
    // console.log('btn2 clicked');
    btn2.style.opacity=1;
    btn1.style.opacity=0.7;
    if(desc1.classList.contains('tr')){
        // desc1.classList.remove('tr');
        desc1.classList.remove('tr');
        desc2.classList.add('tr');
    }
    if(!desc2.classList.contains('tr'))
    desc2.classList.add('tr');

});
adc.addEventListener("mouseover",()=>{
    prevcolor=adc.style.backgroundColor;
    adc.style.backgroundColor='#333'});
adc.addEventListener("mouseout",()=>{
    adc.style.backgroundColor=prevcolor;
});
