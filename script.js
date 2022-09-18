//variable
let word="";
const hint =document.getElementById("hint");
const show =document.getElementById("show");
const guess =document.getElementById("guess");
const button=document.getElementById("button");
const true_word=document.getElementById("word");
const reset=document.getElementById("reset");
let i=0;
let sh=1;
let rf=1;
//functions
let get=function()
{
    fetch('https://random-word-api.herokuapp.com/word')
    .then(word=>word.json())
    .then((data)=>
    {
word=data[0];
show_hint();
    });
    
}
let show_hint=function()
{
if(sh==1)
{take_hint();
show.textContent="Hide";
}
else
{hint.innerHTML=" ";
    show.textContent="Show";
}

sh*=-1;
}
let take_hint=function()
{
    let lg=word.length;
    console.log(lg);
hint.innerHTML+=word[0]+"-".repeat(lg-2)+word[lg-1];
}
let user_input=function()
{ i++;
    let user_word=guess.value;
    true_word.innerHTML=" ";
if(user_word==word)
{
true_word.innerHTML="Amazing Your answer is true ";
}
else if(i<=5)
{

    true_word.innerHTML=i+" Try Again";

}
else if(i>5)
{
    true_word.innerHTML="Okey the true answer is"+"<b> "+word+"</b>";

}
}

let reset_fun=function()
{  i=0,rf=1;
    if(rf==1)
{get();
reset.textContent="Restart";
}
else
{
    get();
    show.textContent="Start";
}
rf*=-1;
}

// user_input();
show.addEventListener('click',show_hint);
button.addEventListener('click',user_input);
reset.addEventListener('click',reset_fun);
