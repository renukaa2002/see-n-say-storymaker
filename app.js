var synth = window.speechSynthesis;
var textToSpeak = '';
var storyParts = {
    noun: '',
    verb: '',
    adjective: '',
    noun2: '',
    place: ''
};

// Arrays of random words
var nouns = ['cat', 'dog', 'wizard', 'robot', 'princess'];
var verbs = ['runs', 'jumps', 'flies', 'dances', 'sings'];
var adjectives = ['happy', 'sad', 'angry', 'brave', 'funny'];
var nouns2 = ['ball', 'tree', 'castle', 'computer', 'bicycle'];
var places = ['in the park', 'at the beach', 'on the moon', 'under the sea', 'in a castle'];

// Functions to pick random words
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update the story text
function updateStory() {
    textToSpeak = `The ${storyParts.noun} ${storyParts.verb} ${storyParts.adjective} the ${storyParts.noun2} ${storyParts.place}.`;
    document.getElementById('storyOutput').innerText = textToSpeak;
}

document.getElementById('nounBtn').onclick = function() {
    storyParts.noun = getRandomWord(nouns);
    updateStory();
};

document.getElementById('verbBtn').onclick = function() {
    storyParts.verb = getRandomWord(verbs);
    updateStory();
};

document.getElementById('adjBtn').onclick = function() {
    storyParts.adjective = getRandomWord(adjectives);
    updateStory();
};

document.getElementById('noun2Btn').onclick = function() {
    storyParts.noun2 = getRandomWord(nouns2);
    updateStory();
};

document.getElementById('placeBtn').onclick = function() {
    storyParts.place = getRandomWord(places);
    updateStory();
};

function speakNow() {
    var utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
}

document.getElementById('speakBtn').onclick = function() {
    speakNow();
};

document.getElementById('randomStoryBtn').onclick = function() {
    storyParts.noun = getRandomWord(nouns);
    storyParts.verb = getRandomWord(verbs);
    storyParts.adjective = getRandomWord(adjectives);
    storyParts.noun2 = getRandomWord(nouns2);
    storyParts.place = getRandomWord(places);
    updateStory();
    speakNow();
};

document.getElementById('resetBtn').onclick = function() {
    storyParts = { noun: '', verb: '', adjective: '', noun2: '', place: '' };
    textToSpeak = '';
    document.getElementById('storyOutput').innerText = '';
};
