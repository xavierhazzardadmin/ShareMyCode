function navSlide () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    

//Animate Links
     navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation = ''  
        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    
    });
    //Burger Animation
    burger.classList.toggle('toggle');

});
};

navSlide();


function crypt(message, key, mode=0){
  message = ""+message;
  key = ""+key;
  mode = +mode;
  if(key.length < message.length){
    return null
  }
  var modes = ["0","0","\u0000"]; //bin, hex, txt(message.le{    message
  if(message.length < key.length){
    message = modes[mode].repeat(key.length - message.length) + message;
  }
    
  var msg = "";
  for(var i in message){
    if(mode == 1){
      msg += ("0000" + parseInt(message[i], 16).toString(2)).slice(-4);
    }else if(mode == 2){
      msg += "0000000000000000" + message.charCodeAt(i);
    }else{
      msg += message[i]
    }
  }
  var k = "";
  for(var i in message){
    if(mode == 1){
      k += ("0000" + parseInt(key[i], 16).toString(2)).slice(-4);
    }else if(mode == 2){
      k += "0000000000000000" + key.charCodeAt(i);
    }else{
      k += key[i]
    }
  }
  var res = "";
  for(var i in msg){
    res += +(msg[i] != k[i])
  }
  if(mode == 1){
    res = res.match(/.{4}/g)
    for(var i in res){
      res[i] = "0123456789abcdef"[parseInt(res[i], 2)]
    }
    res = res.join("")
  }else if(mode == 2){
    res = res.match(/.{16}/g)
    for(var i in res){
      res[i] = String.fromCharCode(parseInt(res[i], 2))
    }
    res = res.join("")
  }
  return res;
}
function strxor(msg="",key=""){
  return msg.split("").map(function(a,b){return String.fromCharCode(a.charCodeAt(0)^key.charCodeAt(b))}).join("")
}
console.log(strxor("<", "testingKey"))