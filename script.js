const loginButton = document.querySelector('.login-button')
const connect = document.querySelector('.connect-button')

loginButton.addEventListener('click', () => {
    window.location.href = '../html/login.html'
})

connect.addEventListener('click', () => {
    window.location.href = '../html/register.html'
})

