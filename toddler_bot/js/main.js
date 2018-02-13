// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

var responseArray = [
{keyword: 'bed', response: 'I don\'t want to go to bed!'}, 
{keyword: 'dinner', response: 'I want crackers for dinner!'}, 
{keyword: 'bath', response: 'You need a bath!'}, 
{keyword: 'iPad', response: 'Why? The iPad has taught me more than you ever will!'},
{keyword: 'ipad', response: 'Why? The iPad has taught me more than you ever will!'},  
{keyword: 'time out', response: 'I\'m going to go live with Grandma!'},
{keyword: 'fine', response: 'I win! I win!'},
{keyword: 'room', response: 'I\'d rather go to the toy store...'},
{keyword: 'give up', response: 'I win! I win!'},
{keyword: 'try a', response: 'Urgh gross! I don\'t want to'}
];

var classMates = ["Sonyl", "Joe", "Kenneth", "Derek", "Liana", "Courtney", "Mark"];
var food = ["cookies", "Cheetos", "malt liquor", "prohibition era cocktails", "cake", "pie"];

var randomClassMate = classMates[Math.floor(Math.random() * classMates.length)];
var randomFood = food[Math.floor(Math.random() * food.length)];

var childResponse = 'I want my mommy!';
var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<b>Toddlerbot:</b> What\'s your name?';				  // first question
var toddler = document.getElementById('toddler');				// store id="toddler" in toddler variable
toddler.innerHTML = question;   
var parent = document.getElementById('chatInput');


// invoke the opening message

function bot() { 
    var input = document.getElementById('chatInput').value;
    // console.log(input);
    document.getElementById('chatInput').value = "";
    var randomClassMate1 = classMates[Math.floor(Math.random() * classMates.length)];
    var childResponse = 'You\'re not as cool as ' + randomClassMate1 + '!';
    var n = childResponse.includes("You\'re not as cool as");

    if (questionNum == 0) {
        toddler.innerHTML = '<b>Toddlerbot:</b> ' + input + ', you\'re not my real parent. ' + randomClassMate + ' is.';// toddler response
        document.getElementById('parent').innerHTML = '<b>You:</b> ' + input;           // clear text box
        question = '<b>Toddlerbot:</b> Can I have some crackers ' + input + '? ' + randomClassMate + ' gives me ' + randomFood + ' all the time!';                    // load next question        
        setTimeout(timedQuestion, 2000);                                    // toddler next question after 2sec delay
    } else if (questionNum != 0) {
        document.getElementById('parent').insertAdjacentHTML('beforeend', '<br /><br /><b>You:</b> ' + input);

        responseArray.forEach(function(obj) {
            if (input.indexOf(obj.keyword) != -1) {
                childResponse =  obj.response;

                document.getElementById('toddler').insertAdjacentHTML('beforeend', '<br /><br /><b>Toddlerbot:</b> ' + childResponse);
            }
        });
    } 
    var n = childResponse.includes("You\'re not as cool as");
    if (n == true && questionNum !== 0) {
        console.log('child response', childResponse);

        document.getElementById('toddler').insertAdjacentHTML('beforeend', '<br /><br /><b>Toddlerbot:</b> ' + childResponse);

    }
};

function timedQuestion() {
    toddler.innerHTML = question;
}

//push enter to run bot function.
var runBot = document.getElementById('parent');
document.addEventListener("keydown", function (e) {
 console.log('event', e)
    if (e.keyCode === 13) {
    e.preventDefault();
    bot();																							// run bot function when enter key pressed
    questionNum++;
    var randomClassMate1 = classMates[Math.floor(Math.random() * classMates.length)];
    }																// increase questionNum count by 1
  });


