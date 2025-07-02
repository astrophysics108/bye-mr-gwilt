class QuoteCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        
        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: block;
                min-height: inherit;
                margin: 2em;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 8px 8px 36px 0px rgba(0, 0, 0, 0.3);
                padding: 2em;
                background-color: #8557aa;
            }
            .container:hover {
                transition: 0.4s;
            }
            .container :global(h2) {
                font-family: "Atkinson Hyperlegible", sans-serif;
                font-weight: 600;
                font-style: normal;
            }
            .container :global(h3) {
                font-family: "Atkinson Hyperlegible", sans-serif;
                font-weight: 500;
                font-style: normal;
            }
            .container :global(p) {
                font-family: "Atkinson Hyperlegible", sans-serif;
                font-weight: 400;
                font-style: normal;
            }
        `;
        
        shadow.appendChild(style);
        shadow.appendChild(container);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const slot = document.createElement('slot');
        this.shadowRoot.querySelector('.container').appendChild(slot);
    }
}

customElements.define('quote-card', QuoteCard);

var nameperson = null;
var quote = null;
var year = null;

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://script.google.com/macros/s/AKfycbymNtqc_8ePorbxoyLem5GC616ycLg3zEi_Nt9WjOJmdtdGx6Imd4JiPMc4YvhYmOvdMg/exec")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById("quote-section");
        data.forEach(entry => {
            const quoteCard = document.createElement("quote-card");
            
            Object.keys(entry).forEach(function (key) {
                if (key === "Timestamp") {
                    return;
                } else if (key === "What's your name? Full Name if you have a common name, please.") {
                     nameperson = `<p class="name">-${entry[key]}, `;
                } else if (key === "What Year Are You In?") {
                    year = `${entry[key]}</p>`;
                } else {
                    quote = `<h2 class="quote">"${entry[key]}"</h2>`;
                }
            });
            quoteCard.innerHTML = quote + nameperson + year; 
            container.appendChild(quoteCard); 
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
