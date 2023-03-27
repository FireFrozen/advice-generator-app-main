fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        let idNumer = parseInt(data.slip.id);
        let adviceText = data.slip.advice;

        document.getElementById("advice-title").innerHTML = "ADVICE #"+idNumer;
        document.getElementById("advice-text").innerHTML = '“'+adviceText+'”';
    });

function resetAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        let idNumer = parseInt(data.slip.id);
        let adviceText = data.slip.advice;

        document.getElementById("advice-title").innerHTML = "ADVICE #"+idNumer;
        document.getElementById("advice-text").innerHTML = '“'+adviceText+'”';
    })
}