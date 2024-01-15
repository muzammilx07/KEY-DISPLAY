let displayText = "Press any Keyboard Key";
const displayArea = document.querySelector(".container-text");
const displayKey = document.querySelector(".container-key");
const audio = new Audio('./click-button.mp3');
const history = document.querySelector(".history-container"); // Corrected selector
const resetbtn = document.getElementById("resetbtn");

displayArea.innerHTML =displayText;


document.addEventListener('keydown', function(e) {
   displayArea.innerHTML = `You Pressed: <span class="pressed-key">${e.key}</span>`;
   displayKey.innerText = e.key;
   audio.currentTime = 0;
   audio.play();

   const eachKey = document.createElement('div');
   eachKey.classList.add('eachkey');
   eachKey.innerHTML = `You Pressed: <span class="pressed-key">${e.key}</span>`;
   history.appendChild(eachKey);
});

resetbtn.addEventListener('click', function() {
   history.innerHTML = '';
});
