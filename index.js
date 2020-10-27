const findAllPermutations = (str) => {
    let split = str.split("")
    if (split.length === 1) {
        return split
    } else {
        let answer = []
        for (let i = 0; i < split.length; i++) {
            for (let j = 0; j < split.length; j++) {
                for (let k = 0; k < split.length; k++) {
                    let a = str[i]
                    let b = str[j]
                    let c = str[k]
                    if (a === b || a === c || b === c) {
                    } else {
                        answer.push(a.concat(b).concat(c))
                    }
                }
                
            }
            
        }
        
        var filteredArray = answer.filter(function(item, pos){
            return answer.indexOf(item) == pos; 
        })
        return filteredArray
    }
}