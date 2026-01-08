const PalindromeCheker=(str)=>{
    str=str.toLowerCase()
    let i=0; 
    let j=str.length-1;
    while(j>=i){
        if(str[i]!==str[j])
        {
            return false;
        }
        j--;
        i++;
    }
    return true;
};

const str="madaM";
const str2="hello";
console.log(PalindromeCheker(str));

console.log(PalindromeCheker(str2));
