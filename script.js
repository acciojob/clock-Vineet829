let date = new Date()
let time = document.querySelector("#timer")
let text = document.createElement("p")
let options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

let formattedDate = date.toLocaleString('en-US', options);

text.textContent = formattedDate
 time.appendChild(text)

