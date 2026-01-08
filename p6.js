const evenFunc=(arr)=>{
    let evenArr=[];
    for(let i=0;i<arr.length;i++){
       if(arr[i]%2===0){
        evenArr.push(arr[i]);
       }
    }
    return evenArr;
}

const arr=  [1, 2, 3, 4, 5, 6]
console.log(evenFunc(arr));

