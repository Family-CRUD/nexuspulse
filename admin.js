const dashboard = document.querySelector('.dashboard')
const patientData = document.querySelector('.patient-records')

dashboard.addEventListener('click', () => {
    dashboard.classList.add('stay')
    patientData.classList.remove('stay')
})

patientData.addEventListener('click', () => {
    patientData.classList.add('stay')
    dashboard.classList.remove('stay')
})