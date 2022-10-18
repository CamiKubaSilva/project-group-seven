let library = {
    name: false,
    lastName: false,
    address: false,
    email: false,
    phone: false
};

let button = document.getElementById("button");
button.style.backgroundColor = "grey";

const setTo = (value, boolean) => {
    library[value] = boolean;
};

const check = (e, boolean, exist) => {
    if (boolean) {
        setTo(e.target.id, true);
        border(e.target, "black")
        if (e.target.parentNode.children[1]) {
            e.target.parentNode.children[1].remove()
        }
    } else {
        border(e.target, "red");
        setTo(e.target.id, false);
        let p = document.createElement("p");
        p.style.color = "red";
        if (!e.target.parentNode.children[1]) {
            switch (e.target.id) {
                case "name" || "lastName" || "address": {
                    p.innerHTML = "The " + e.target.id + " cannot be empty."
                    break;
                }
                case "phone": {
                    p.innerHTML = "The " + e.target.id + " cannot be empty and must be an phone number."
                    break;
                }
                case "email": {
                    p.innerHTML = "The " + e.target.id + " cannot be empty and must be an email."
                    break;
                }
                default:
                    p.innerHTML = "The " + e.target.id + " cannot be empty."
            }
        }
        e.target.parentNode.appendChild(p)
    }
}

const empty = (e) => {
    e.preventDefault();
    !e.target.value ? check(e, false) : check(e, true)
};

const regex = (e) => {
    e.preventDefault();
    !e.target.value || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value) ? check(e, false, !e.target.value) : check(e, true)
};

const number = (e) => {
    e.preventDefault();
    !e.target.value || isNaN(e.target.value) ? check(e, false) : check(e, true)
};

const border = (input, color) => {
    input.style.borderColor = color;
    input.style.outline = color;
};

const flag = () => {
    return Object.values(library).every(e => e == true)
};

const sendEmail = (e) => {
    e.preventDefault()
    if (flag()) {
        Swal.fire(
            'Your information has been saved',
            'We will reach out shortly',
            'success'
        )
        button.style.backgroundColor = "grey";
        library = {
            name: false,
            lastName: false,
            address: false,
            email: false,
            phone: false
        };
        e.target.reset()
    }
};

let form = document.getElementById("form");
form.addEventListener("submit", sendEmail);

let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");

name.addEventListener("input", empty);
lastName.addEventListener("input", empty);
address.addEventListener("input", empty);

let email = document.getElementById("email");
let phone = document.getElementById("phone");

email.addEventListener("input", regex);
phone.addEventListener("input", number);

const checkButton = (e) => {
    e.preventDefault()
    button.style.backgroundColor = flag() ? "#c3002f" : "grey";
};

form.addEventListener("change", checkButton)