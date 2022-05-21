// Popovers

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Select gender

if(window.location.pathname === '/'){
    const radioBtn1 = document.querySelector('#male')
    const radioBtn2 = document.querySelector('#female')
    const radioBtn3 = document.querySelector('#custom')
    const genderSelect = document.querySelector('#genderSelect')

    radioBtn1.addEventListener("change", ()=>{
        genderSelect.classList.add('d-none')
    })
    radioBtn2.addEventListener("change", ()=>{
        genderSelect.classList.add('d-none')
    })
    radioBtn3.addEventListener("change", ()=>{
        genderSelect.classList.remove('d-none')
    })

}
