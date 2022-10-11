
const sendEmail = (e) => {
    e.preventDefault()
    Swal.fire(
        'Your information has been saved',
        'We will reach out shortly',
        'success'
    )
}

let form = document.getElementById("form")

form.addEventListener("submit", sendEmail)
