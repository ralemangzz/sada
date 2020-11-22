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

checkbox.addEventListener("change", () => {
  //change the theme of the website
  document.body.classList.toggle("dark");
} );

