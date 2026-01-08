const removeDuplicateFunc=(arr)=>{
    let uniqueArr=[];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);

        }
    }
    return uniqueArr;
}

const arr= [1, 2, 2, 3, 4, 4];
console.log(removeDuplicateFunc(arr));

