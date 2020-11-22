const texts = ["SADA SERVICIOS"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
   
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400)


}());

const checkbox =
      document.getElementById("checkbox");


    
    var setTheme = localStorage.getItem('theme');
    console.log('theme:', setTheme)

    if(setTheme == null){
        swapStyle('light.css')
    }else{
        swapStyle(setTheme)
    }

    function swapStyle(sheet){
        document.getElementById('mystylesheet').href = sheet
        localStorage.setItem('theme', sheet)
    }

  
