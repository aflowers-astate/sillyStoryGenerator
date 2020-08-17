var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertx = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"];

let inserty = ["the soup kitchen",
"Disneyland",
"the White House"];

let insertz = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  //step 1
  let newStory = storyText;

  //step 2
  let xItem = randomValueFromArray(insertx), yItem = randomValueFromArray(inserty), zItem = randomValueFromArray(insertz);

  //step 3
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);  //second call
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  //step 4
  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }
  //step 5
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stones';
    var temperature =  Math.round((94-32)*5/9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  //step 6
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
