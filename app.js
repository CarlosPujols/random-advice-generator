const heading = document.getElementById('heading');
const advice = document.getElementById('advice');
const button = document.getElementById('button');

window.addEventListener('load', defaultAdvice);

function defaultAdvice(){
    console.log('Clicked on button');

    fetch('https://api.adviceslip.com/advice')

    .then(function(Response){
        return Response.text();
    })

    .then(function(data){
        dataArray = JSON.parse(data);
        console.log(dataArray);

        adviceID = dataArray.slip.id;
        console.log(adviceID);

        adviceText = dataArray.slip.advice;
        console.log(adviceText);

        output = 'Advice #' + adviceID;
        heading.innerHTML = output;

        advice.innerHTML = adviceText;

    })

}


button.addEventListener('click', generateAdvice);

function generateAdvice(){
    console.log('Clicked on button');

    fetch('https://api.adviceslip.com/advice')

    .then(function(Response){
        return Response.text();
    })

    .then(function(data){
        dataArray = JSON.parse(data);
        console.log(dataArray);

        adviceID = dataArray.slip.id;
        console.log(adviceID);

        adviceText = dataArray.slip.advice;
        console.log(adviceText);

        output = 'Advice #' + adviceID;
        heading.innerHTML = output;

        advice.innerHTML = adviceText;

    })

}