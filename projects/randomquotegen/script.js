const url = "https://api.quotable.io/random";
const quoteBox = document.querySelector('.qt');
let author = document.querySelector('.author') 
let txtBox = document.querySelector('.txtBox')
let previousQuote =null;
let prevBtn = document.querySelector('.prev');
let temp=null;


async function lQ()
{
 if (quoteBox && author)
    previousQuote = {
        content :  quoteBox.innerHTML ,
        author: author.innerHTML,
    }

    const res = await fetch(url);
    const quote = await res.json();
    txtBox.style.display = "block";
    author.innerHTML = quote.author;
    quoteBox.innerHTML= quote.content;
    prevBtn.style.display = "inline";
   
   

}

function showPQ(){
    if(previousQuote){
        temp={
            content :  quoteBox.innerHTML ,
            author: author.innerHTML,
           }
        quoteBox.innerHTML=previousQuote.content;
        author.innerHTML= previousQuote.author;
      
       previousQuote = {
        content : temp.content ,
        author: temp.author,
       }
    }
    
}