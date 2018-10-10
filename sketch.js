

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5a8d3f78b9aa459c996824806d6ef855";
var googleurl = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2C+replies&videoId=y894QNtX0VA&key=AIzaSyCXDfdeUmtcFmKBlyIILiu5pA2IWqZ_p5I";
var newUrl = 'https://newsapi.org/v2/top-headlines?' + 'country=gr&'+ 
          'pageSize=50&'+
          'apiKey=155f4a7a9a1a449ba841c3ea562e4d62'; //from NEWS API

var newNew = 'https://newsapi.org/v2/everything?domains=nytimes.com&pageSize=100&apiKey=155f4a7a9a1a449ba841c3ea562e4d62';
var generator = new RiMarkov(2);

var asdf = "https://newsapi.org/v2/everything?q=trump&pageSize=100&apiKey=155f4a7a9a1a449ba841c3ea562e4d62";
//var url = "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=155f4a7a9a1a449ba841c3ea562e4d62";
var arts;
var titles = [];
let joinedString = "";
var sss = "";
var x = 10;

function preload(){


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(.3);
  //loadJSON(url, gotData);
  loadJSON(asdf, gotData);
  //loadJSON(newNew, gotData);
  textAlign(CENTER);  
}


//RETRIEVE API DATA
function gotData(data) {

  arts = data.articles; //first load all articles in array 
  
  //populate title array with titles
  for (var i = 0; i < arts.length; i++){
    titles.push(arts[i].title);
  }
  
  joinedString = join(titles, ". ");

}

function draw(){
    textFont("Georgia");
    textSize(15);
  
  generator.loadText(joinedString);
  console.log(joinedString);

  sss = generator.generateSentences(1);
  background(255);
 
  text(sss, windowWidth/2, windowHeight/2 );
  
  

}




