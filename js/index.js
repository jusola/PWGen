var dictionary = "";
const wordCount = 3

function StartGen(){
  $.getJSON( "dictionary/words.json", function( json ) {
    dictionary = json;
    SelectWords();
 });
}


function getRandomInt(min, max) {
    var byteArray = new Uint32Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 4294967295;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}


function SelectWords(){
  var password = "";
  for (var i = 0; i < wordCount; i++){
    var tempWord = dictionary.array[getRandomInt(0, 274917)];
    tempWord = tempWord.charAt(0).toUpperCase() + tempWord.slice(1);
    password+=tempWord;
  }
  if(password!=""){
    document.getElementById("password").innerHTML = password;
  }else{
    console.log("password generation failed");
  }
}
