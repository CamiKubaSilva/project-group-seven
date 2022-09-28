const sendEmail = (e) => {
    e.preventDefault()
    Swal.fire(
        'Sus datos fueron guardados correctamente',
        'Nos contactaremos a la brevedad',
        'success'
      )
}

let form = document.getElementById("form")

form.addEventListener("submit", sendEmail)