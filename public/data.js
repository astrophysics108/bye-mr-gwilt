fetch("https://script.google.com/macros/s/AKfycbz14-aYUBW-saYNaUNA-XtMN-U8BvKyDZRCHTLEYWUKNv5JoVt6wqSyXkNmxTfXjNiEQQ/exec")
.then(response => response.json())
.then(data => {
const container = document.getElementById('responses');
data.forEach(entry => {
const div = document.createElement('div');
div.innerHTML = Object.values(entry).join(' | ');
container.appendChild(div);
	});
	});