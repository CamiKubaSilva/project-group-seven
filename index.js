const API_KEY = "563492ad6f917000010000013fedd73aac834380a3218fa271bef31a"
const URL = "https://api.pexels.com/v1/search?query=expensive%20cars"

function getImages() {
    return new Promise((resolve, reject) => {
        fetch(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            },
        })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            });
    })
}

function mapCards() {
    let cards = document.getElementById("cards")
    getImages().then(cars => {
        for (let car of cars.photos) {
            let div = document.createElement("div")
            div.className = "cardContainer"
            let topContainer = document.createElement("div")
            let name = document.createElement("p")
            topContainer.className = "cardDescription"
            name.innerHTML = "Add this car to your favs!"
            let img = document.createElement("img")
            img.src = car.src.medium
            img.className = "cardImg"
            let button = document.createElement("button")
            button.innerHTML = "❤"
            button.className = "button"
            button.addEventListener("click", addFav)
            topContainer.appendChild(name)
            topContainer.appendChild(button)
            div.appendChild(topContainer)
            div.appendChild(img)
            cards.appendChild(div)
        }
    })
}

const addFav = (e) => {
    e.preventDefault()
    Swal.fire({
        position: 'top-mid',
        icon: 'success',
        title: 'The car has been added to favorites',
        showConfirmButton: false,
        timer: 1000
    })
}

mapCards()

