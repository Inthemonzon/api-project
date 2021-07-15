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

    let tableDataCatch = document.createElement('td')

    let catchButton = document.createElement('button')
    catchButton.textContent = 'Catch Fish'
    let catchFish = fish['catch-phrase']
    addCatchListener(catchButton, catchFish, tableDataCatch)

    tableRow.append(tableDataName, tableDataTime, tableDataPrice, tableDataShadow, tableDataCatch, catchButton)
    tableBody.append(tableRow)
}

const addCatchListener = (catchButton, catchFish, tableDataCatch) => {
    catchButton.addEventListener('click', (e) => {
    tableDataCatch.textContent = catchFish
    })
}
//point before changes!!!!!
//comment above was just so i could have a safe "undo until this disappears" point just in case my code didnt work 