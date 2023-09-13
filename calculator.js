const display=document.querySelector('.display')
let result=false
    function displayValue(value){
      if(result){
        display.value=''
        result=false;
      }
      display.value+=value;
    }

    function calculate(){
      try{
        display.value=eval(display.value);
        result=true
      }
      catch(error){
        display.value=''
        alert('Invalid!')
      }
      
    }
    function clr(){
      display.value='';
      result=false
    }

    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='9'){
        displayValue(9)
      }
       else if(event.key==='8'){
        displayValue(8)
      }
       else if(event.key==='7'){
        displayValue(7)
      }
       else if(event.key==='6'){
        displayValue(6)
      }
       else if(event.key==='5'){
        displayValue(5)
      }
       else if(event.key==='4'){
        displayValue(4)
      }
       else if(event.key==='3'){
        displayValue(3)
      }
       else if(event.key==='2'){
        displayValue(2)
      }
       else if(event.key==='1'){
        displayValue(1)
      }
       else if(event.key==='0'){
        displayValue(0)
      }
       else if(event.key==='+'){
        displayValue('+')
      }
       else if(event.key==='-'){
        displayValue('-')
      }
       else if(event.key==='*'){
        displayValue('*')
      }
       else if(event.key==='/'){
        displayValue('/')
      }
       else if(event.key==='C' || event.key==='c' || event.key==='Escape'){
        display.value=''
      }
       else if(event.key==='=' || event.key==='Enter'){
        calculate()
      }
      else if(event.key==='Backspace'){
        display.value=display.value.slice(0,-1);
      }
    })
