function getAverage (arr:number[]): number{
    let sum:number =0;
    arr.forEach((value)=>{
        sum= sum+value;
    })
    return sum/arr.length;
}
console.log(getAverage([23,43,53]));