const MaxNumberFunc=(arr)=>{
    let maxNumber=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxNumber){
            maxNumber=arr[i];
        };
    }
    return maxNumber;
}

const arr1=[5, 1, 9, 3];
console.log(MaxNumberFunc(arr1));
