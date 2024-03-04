// const dashboard = document.querySelector('.dashboard')
// const patientData = document.querySelector('.patient-records')

// dashboard.addEventListener('click', () => {
//     dashboard.classList.add('stay')
//     patientData.classList.remove('stay')
// })

// patientData.addEventListener('click', () => {
//     patientData.classList.add('stay')
//     dashboard.classList.remove('stay')
// })

const viewButton = document.querySelectorAll('.view')
const dashboard = document.querySelector('.dashboard') 

viewButton.forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = '../html/view-patient.html'
    })
})

dashboard.addEventListener('click', () => {
    window.location.href = '../html/dashboard.html'
})