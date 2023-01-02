
// Problem Solving (logic Devolopment)
// Compatative Programing(?)
// DSA
// Data Structure (how you should organize date to access and manipulate the data)
//Algorithm



// understand the problem (restate the problem in own words)
// write down the details
// Break down the problems (how many parts ?)
// write down and follow the steps

// We need a avarecge percent number


function avaragePercent(arr){

    let plusAllMark = 0
    
    for(let avarge of arr){
        
        if(avarge < 700){
            return null
        }
        
        plusAllMark += avarge

        const avgNumber = plusAllMark / arr.length

        const factionAvrNum = avgNumber / 1000
        
       return Math.round(factionAvrNum * 100)

    }    
    
}

console.log(avaragePercent([700, 850, 900, 930, 770, 830]))



