// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { Blob } from './blob.js'


function refreshScores(blob) {
  $(".hunger").text(blob.foodLvl);
  $(".mood").text(blob.mood);
  $(".energy").text(blob.energy);
  $(".cleanliness").text(blob.cleanliness);
  $(".remainingDay").text(blob.remainingDay);
}

$(document).ready(function(){

  const blob = new Blob();

  blob.start();
  $(".sleep").click(function(event){
    event.preventDefault();
    blob.sleep();
  });
  const feedBlob = blob.feed(50);
  feedBlob("apple");

  const trainAgi = blob.train("agi");
  trainAgi(10);
  trainAgi(15);
  const trainInt = blob.train("int");
  trainInt(10);
  trainAgi(20);

  setTimeout(() => blob.work(15), 2000);


  setInterval(function(){
    refreshScores(blob);
  }, 1000);
});
