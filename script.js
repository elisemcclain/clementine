const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const button = document.createElement('button')
button.innerText = 'Click if you love Cows'
button.id = 'mainButton'

button.addEventListener('click', () => {
  alert('You love cows!')
})

document.body.appendChild(button)