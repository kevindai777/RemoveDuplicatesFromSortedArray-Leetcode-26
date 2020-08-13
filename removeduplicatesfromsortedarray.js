//Objective is to find the length of the new array after deleting all duplicates
//in a sorted array. We want to do this in O(1) space.

let nums = [0,0,1,1,1,2,2,3,3,4]


//O(n) solution that uses two-pointers
//We use one to keep track of the 'beginning' of the array to update duplicates

let i = 0
    
if (nums.length == 0) {
    return 0
}

//Whenever a new element is passed by, update length of new array
//Make next element in new array into the newly passed value to remove duplicates
for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
        i++
        nums[i] = nums[j]
    }
}

//Add one to it since indexing starts at 0
return i + 1