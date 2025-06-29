

fetch("https://script.google.com/macros/s/AKfycbymNtqc_8ePorbxoyLem5GC616ycLg3zEi_Nt9WjOJmdtdGx6Imd4JiPMc4YvhYmOvdMg/exec")
.then(response => response.json())
.then(data => {
const container = document.getElementById('responses');
data.forEach(entry => {
const div = document.createElement('div');
div.innerHTML = Object.values(entry).join(' | ');
container.appendChild(div);
	});
	});