document.addEventListener("DOMContentLoaded", () => {
    fetch ("http://acnhapi.com/v1/fish/")
    .then (Response => Response.json())
    .then (fishData => {
        console.log(fishData)
        debugger
    }) 
})

const renderFish = (fishData) => {
    let tableBody = document.getElementById('table-body')
    let tableRow = document.createElement('tr')
    tableRow.className = 'fish-name'

    let tableDataName = document.createElement('td')
    tableDataName.textContent = fishData.name

    let tableDataTime = document.createElement('td')
    tableDataTime.textContent = fish.time

    let tableDataPrice = document.createElement('td')
    tableDataPrice.textContent = fish.price

    let tableDataShadow = document.createElement('td')
    tableDataShadow.textContent = fish.shadow

    let editButton = document.createElement('button')
    editButton.textContent = 'Edit Fish'
    editFish(editButton)

    tableRow.append(tableDataName, tableDataTime, tableDataPrice, tableDataShadow, editButton)
    tableBody.append(tableRow)
}

const editFish = (editButton) => {
    editButton.addEventListener('click', (e) => {
        document.querySelector('fish-form').elements.name.value
        document.querySelector('fish-form').element
        document.querySelector('fish-form').element
    })
}


   
  