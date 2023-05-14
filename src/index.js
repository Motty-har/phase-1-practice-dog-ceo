
let dogBreed = []
document.addEventListener('DOMContentLoaded',fetch("https://dog.ceo/api/breeds/image/random/4",)
.then(function (response){
    return response.json()
})
.then(function(data){
    const myArray = data.message
    myArray.forEach((d) => {
        dogImages(d)
     })
}))
function dogImages(img){
    const image = document.createElement("img")
    const dogImage = document.getElementById('dog-image-container')
    dogImage.appendChild(image)
    image.src = img
}

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/list/all")
.then(function (response){
    return response.json()
})
.then(function(data){
    dogBreed = Object.keys(data.message)
    const myList = Object.keys(data.message)
        myList.forEach((el) => {
        dogList(el)
    })
})
const dropdown = document.getElementById('breed-dropdown')
dropdown.addEventListener("click", (event) => {
    const innerDropdown = event.target.value
    let filterBreeds = dogBreed.filter((breed) => {
        if(breed.startsWith(innerDropdown)){
                return breed
        }   
    })
    document.getElementById('dog-breeds').textContent = ""
    filterBreeds.forEach((el) => {
        dogList(el)
    })
})
})

function dogList(list){
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = list
        li.addEventListener('click', () =>{
            li.style.color = "red"
         })
}
