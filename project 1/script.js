let string = "";
let buttons= document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
  btn.addEventListener('click',(ev)=>{
    if(ev.target.innerHTML == '=')
    {
      string=eval(string);
      document.querySelector('#input').value = string;
    }
      else if(ev.target.innerHTML == 'C')
    {
      string="";
      document.querySelector('#input').value = string;
    }
        else if(ev.target.innerHTML == 'backspace')
    {
      string= string.slice(0,-1);
      document.querySelector('#input').value = string;
    }
    else if(ev.target.innerHTML == 'x')
    {
      string= string +'*';
      document.querySelector('#input').value = string;
    }
      else 
    {
    console.log(ev.target);
    string= string + ev.target.innerHTML;
    console.log(string)
    document.querySelector('#input').value = string}
  })
  
}) 

