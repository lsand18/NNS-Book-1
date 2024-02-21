// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }
    const totalMiles = Math.round(total)
    return totalMiles
}

// Get the shortest of all trails
const shortyTrail = (trailArray) => {
    //originally had shortest = longest but could not pull longest value from other modules.
    let shortest = Infinity
    for (const trail of trailArray) {
        if (trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if (trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the sum of all river miles
const totalRiverMiles = (rivers) => {
    let totalRiver = 0
    for (const river of rivers) {
        totalRiver += river.length
    }

    return totalRiver
}


// Get the longest of all trails
const longRiver = (rivers) => {
    let longestRiverM = 0
    for (const river of rivers) {
        if (river.length > longestRiverM) {
            longestRiverM = river.length
        }
    }

    return longestRiverM
}

// Get the shortest of all rivers
const shortyRiver = (rivers) => {
    let shortestRiver = Infinity
    for (const river of rivers) {
        if (river.length < shortestRiver) {
            shortestRiver = river.length
        }
    }

    return shortestRiver
}

let leastExpensiveTrailList = ""
const leastExpensiveTrails = (trails) => {
    for (const trail of trails) {
        if (trail.price === "$") {
            leastExpensiveTrailList += "\t" + trail.trailName + "\n"

        }
    }
    return leastExpensiveTrailList
}

let expensiveTrailList = ""
const expensiveTrails = (trails) => {
    for (const trail of trails) {
        if (trail.price === "$$$$" || trail.price === "$$$$$") {
            expensiveTrailList += "\t" + trail.trailName + "\n"
        }
    }
    return expensiveTrailList
}

let leastExpensiveRiverList = ""
const leastExpensiveRivers = (rivers) => {
    for (const river of rivers) {
        if (river.price === "$") {
            leastExpensiveRiverList += "\t" + river.river + "\n"

        }
    }
    return leastExpensiveRiverList
}

let expensiveRiverList = ""
const expensiveRivers = (rivers) => {
    for (const river of rivers) {
        if (river.price >= "$$$$") {
            expensiveRiverList += "\t" + river.river + "\n"
        }
    }
    return expensiveRiverList
}

const trailDetails = (trails) => {
    for (const trail of trails) {
        console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long. \n The highlighted plant for the trip is ${trail.plantHighlight}. \n`)
    }

}

const riverDetails = (rivers) => {
    for (const river of rivers) {
        console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long. \n The unique fish for the trip is ${river.uniqueFish}. \n`)
    }

}


module.exports = {
   totalTrailMiles, shortyTrail, longTrail, totalRiverMiles,
   longRiver, shortyRiver, leastExpensiveTrails, expensiveTrails,
   leastExpensiveRivers, expensiveRivers, trailDetails, riverDetails,
   leastExpensiveRiverList, leastExpensiveTrailList, expensiveRiverList, expensiveTrailList,
}
