function getAverage (arr:number[]): number{
    let sum:number =0;
    arr.forEach((value)=>{
        sum= sum+value;
    })
    return sum/arr.length;
}
console.log(getAverage([23,43,53]));

function getAmountOfPositive(arr:number[]):number{
    let countOfP:number=0;
    arr.forEach((value)=>{
        if (value>0){
            countOfP++;
        }
    })
    return countOfP;
}

function sortList(arr:number[]){
    return arr.sort();
}