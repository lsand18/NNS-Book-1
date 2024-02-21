// imports
const { trails, rivers } = require("./wilderness-data.js")
const{
    totalTrailMiles, shortyTrail, longTrail, totalRiverMiles,
    longRiver, shortyRiver, leastExpensiveTrails, expensiveTrails,
    leastExpensiveRivers, expensiveRivers, trailDetails, riverDetails,
    leastExpensiveTrailList, leastExpensiveRiverList, expensiveRiverList, expensiveTrailList,
 } = require("./wilderness-functions.js")


// begin code
console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\ #|#/###
     /_____/----\ _    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\ _         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\ ~ o                             }|{
                  o     O                          ____/   \ ____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
// console.log("\n")
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

// longTrail must go before shortyTrail to return longest variable to shortTrail function unless using infinity
const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

const shortTrail = shortyTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)
console.log("\n")

const leastExpensiveTrailsOutput = leastExpensiveTrails(trails)
console.log(`The least expensive trails are \n ${leastExpensiveTrailsOutput}`)

const expensiveTrailsOutput = expensiveTrails(trails)
console.log(`The most expensive trails are \n ${expensiveTrailsOutput}`)

console.log('TRAIL DETAILS:')
console.log('-------------------------------')
trailDetails(trails)


console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')

//Rivers
const riverTotal = totalRiverMiles(rivers)
console.log(`We service ${riverTotal} miles of rivers across the US`)

// longTrail must go before shortyRiver to return longest variable to shortRiver function
const longestRiver = longRiver(rivers)
console.log(`The longest river is ${longestRiver} kilometers`)

const shortRiver = shortyRiver(rivers)
console.log(`The shortest river is ${shortRiver} kilometers`)
console.log("\n")

const leastExpensiveRiversOutput = leastExpensiveRivers(rivers)
console.log(`The least expensive rivers are \n ${leastExpensiveRiversOutput}`)

const expensiveRiversOutput = expensiveRivers(rivers)
console.log(`The most expensive rivers are \n ${expensiveRiversOutput}`)

console.log('RIVER DETAILS:')
console.log('-------------------------------')
riverDetails(rivers)