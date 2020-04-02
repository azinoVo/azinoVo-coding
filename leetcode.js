// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
let nums = [2,2,1]

var singleNumber = function(nums) {
    let list = {}
    
    nums.map(num => {
        if(list[num]) {
            list[num]++
        } else {
            list[num] = 1
        }
    })
        
    let arrayList = Object.entries(list)
    
    let filtered = arrayList.filter(entry => {
        return entry[1] === 1
    })
    
    return filtered[0][0]
};

singleNumber(nums)