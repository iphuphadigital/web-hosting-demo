/**
 * Event listener configuration
 */
const button = document.querySelector('button')

// Generate initial favourite number
document.querySelector('span').innerHTML = Math.random()

button.addEventListener('click', () => {
  document.querySelector('span').innerHTML = Math.random()
})