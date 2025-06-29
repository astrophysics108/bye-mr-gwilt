

fetch("https://script.google.com/macros/s/AKfycbymNtqc_8ePorbxoyLem5GC616ycLg3zEi_Nt9WjOJmdtdGx6Imd4JiPMc4YvhYmOvdMg/exec")
.then(response => response.json())
.then(data => {
const container = document.getElementById('responses');
data.forEach(entry => {
const div = document.getElementById('quotes');
div.innerHTML += '<div id = "quote">'
Object.keys(entry).forEach( function (key) {
    if (key === "Timestamp"){
        return;
    }
    else {
        div.innerHTML += ` <h1>${entry[key]}</h1>`
    }
    div.innerHTML += '</div>'
})
container.appendChild(div);
	});
	});