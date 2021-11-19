let vheight = $(window).height();
console.log(vheight)
let vwidth = $(window).width();
console.log(vwidth)

if(vheight<vwidth){
  $(".oneOfThree").css("max-width", "35%");
  $(".home").css("flex-direction", "row");
  $(".home").css("justify-content", "space-evenly");
}

if(vheight>vwidth){
  $(".oneOfThree").css("width", "50%");
  $(".home").css("flex-direction", "column");
  $(".home").css("align-items", "center");
   $(".lesleyPic").css("position", "float");
  $(".lesleyPic").css("width", "15%");
}

let galleryInfo = [
];

function addImage(a, b){
  let imgLink = a;
  let desc = b;
  galleryInfo.push(
    {
      image: imgLink,
      description: desc
    }
  )
}

addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F02.jpg?v=1636058294612", "This drawing is a drawing of my favourite show on Netflix, that is still streaming, called Avatar: The Last Airbender of the fire-based character Azula. This shows the fire she has metaphorically and physically can do which is to have the will which I have to keep going and succeed in school.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F08.jpg?v=1636058296228", "This is one of the other art mediums I do which is photography. This photo is to try and capture the essence f how the feeling of when everything feels like it's failing or looking bad, there's always light at the end of the tunnel and the flower in this case represents hope.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F03.jpg?v=1636058296155", " This artwork showcases yet another one of my mediums that I do which is landscape. And this piece is a basic nature setting of a cherry blossom tree, which happens to be one of my favourite flower trees that grow in Japan.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F04.jpg?v=1636058294691", " This piece is just a simple traditional drawing of yet one of my other original characters named Ace. It was a practice to focus on shading and working with black and white and simple light to dark value.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F06.jpg?v=1636058294798", "This photo is a simple photo of a cloud but it represents the feeling of childhood nostalgia and how it feels to be at home again during the nice clear skies of summer.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F05.jpg?v=1636058296942", "This art piece is of one of my favorite Ghibli movies named, My Neighbour Totoro is one of my favorite science where the character is just waiting at a bus stop.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F09.jpg?v=1636058294250", "This piece is just an achievement I was able to win which was a design to make for my Senior class sweaters and be able to have it on our sweaters and to be bought for as well.(Note: the dragon itself was traced, I just did the design around it which would go on the sweater)")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2F07.jpg?v=1636058297432", "This is another photo of my dog, Pooky, who is my emotional support animal and the photo is to show the physical feeling of being happy which is bright and warm and in this case, it's supposed to make you feel happy.")
addImage("https://cdn.glitch.me/480411d1-653e-44c9-8b39-09ffa112a78f%2Funnamed.jpg?v=1636060925517", "This piece is just a simple artwork of my original character, Zoe. She is just an innovative design based on the popularized style of retro.")


let idNum = 0
for(var i =1; i<= galleryInfo.length; i++){
  let idTotal = galleryInfo.length-1
  $('.gallery').append('<div id="idNum'+ idNum +'" class="imageDiv"> <img class = "art" src = ' + galleryInfo[idNum].image + '> <p>' + galleryInfo[idNum].description + '</p> </div>')
  console.log(`added ${i} div(s)`)
    idNum = idNum+1
}