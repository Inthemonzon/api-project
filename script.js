document.addEventListener("DOMContentLoaded", () => {
    fetchFish(null)

    document.getElementById("fishSearch").addEventListener('click', (e) => {
        document.getElementById("table-body").innerHTML = ""
        fetchFish(document.getElementById("fishName").value)
    })
})

const fetchFish = (filter) => (
    fetch ("http://acnhapi.com/v1/fish/")
    .then (Response => Response.json())
    .then (fishData => {
        Object.keys(fishData).forEach( key => {
            // console.log(key)
            let name = fishData[key].name["name-USen"]
            if (filter==null) {
                renderFish(fishData[key])
            } else if (name.includes(filter)) {
                renderFish(fishData[key])
            }  
        }) 
    }) 
)

const renderFish = (fish) => {
    let tableBody = document.getElementById('table-body')
    let tableRow = document.createElement('tr')
    tableRow.className = 'fish-name'

    let tableDataName = document.createElement('td')
    tableDataName.textContent = fish.name["name-USen"]

    let tableDataTime = document.createElement('td')
    tableDataTime.textContent = fish.availability.time

    let tableDataPrice = document.createElement('td')
    tableDataPrice.textContent = fish.price

    let tableDataShadow = document.createElement('td')
    tableDataShadow.textContent = fish.shadow

    let locationButton = document.createElement('button')
    locationButton.textContent = 'View Location'
    let location = fish.availability.location
    addLocationListener(locationButton, location)

    tableRow.append(tableDataName, tableDataTime, tableDataPrice, tableDataShadow, locationButton)
    tableBody.append(tableRow)
}

const addLocationListener = (locationButton, location) => {
    locationButton.addEventListener('click', (e) => {
       window.alert(location)
    })
}