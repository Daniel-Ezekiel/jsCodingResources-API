const express = require('express');
const app = express();
const PORT = 8000;

const jsCodingResources = {
    'arrays': [
        {
            name: 'Javascript Arrays - Javascript Tutorial For Beginners',
            description: 'This video is from DevEd and it covers the basics of arrays and the right situations where to use them. From the popular methods like pop and push to technical higher order functions like map and filter. It is quite helpful.',
            vid_url: 'https://www.youtube.com/watch?v=8FmBEN0XZyI'
        },
        {
            name: 'Learn JavaScript Arrays! Free Software Engineering Bootcamp! (class 19) - #100Devs',
            description: 'This is the video for Class 19 of the Learn with Leon FullStack Development training program. It gives and introduction of what arrays are and a basic overview of some array methods with great analogy for better understanding.',
            vid_url: 'https://www.youtube.com/watch?v=YUQUGtUbwMY'
        },
        {
            name: 'Practice JavaScript Arrays! Free Software Engineering Bootcamp! (class 20) - #100Devs',
            description: 'This is the video for Class 20 of the Learn with Leon FullStack Development training program. It gives and introduction of what arrays are and a basic overview of some array methods with great analogy for better understanding.',
            vid_url: 'https://www.youtube.com/watch?v=YUQUGtUbwMY'
        },
    ],

    'event loop': [
        {
            name: 'What the heck is the event loop anyway? | Philip Roberts | JSConf EU',
            description: 'At the JSConf EU, Phillip Roberts did a really great job of using great visualisations to properly explain the event loop and other terms liks "non-blocking", "callback", "asynchronous", "single-threaded", etc.',
            vid_url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ'
        }
    ],

    'objects': [
        {
            name: 'Javascript Objects and Keyword This - Javascript Tutorial For Beginners',
            description: 'This video is from DevEd and it covers the basics of creating objects and better understanding the "this" keyword. ',
            vid_url: 'https://www.youtube.com/watch?v=qs3F-z6ridc'
        }
    ],

    'api': [
        {
            name: 'APIs for Beginners - How to use an API (Full Course / Tutorial)',
            description: `Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners. You will learn what APIs do, why APIs exist, and the many benefits of APIs. APIs are used all the time in programming and web development so it is important to understand how to use them. You will also get hands-on experience with a few popular web APIs. As long as you know the absolute basics of coding and the web, you'll have no problem following along`,
            vid_url: 'https://www.youtube.com/watch?v=qs3F-z6ridc'
        }
    ]    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/resources/:jsConcept', (request, response) => {
    const jsConcepts = request.params.jsConcept;
    console.log(jsConcepts);
    response.json(jsCodingResources[jsConcepts]);
})

app.listen(process.env.PORT || PORT, _ => {
    console.log("I'm listening on Port " + PORT + ". Jot things down!")
})