let myArray = [20,53,78,4,91,12]
let varTemp;
for(let i = 0; i < myArray.length; i++){
    for (let j = i+1; j < myArray.length; j++ ){
        if (myArray[i] > myArray[j]){
            varTemp = myArray[j];
            myArray[j] = myArray[i];
            myArray[i] = varTemp;
        }
    }
}
document.write('<h3>Sorted Array</h3>');
for (let a=0; a<myArray.length;a++){
    document.write('<strong>'+myArray[a]+', </strong>');
}


/*  
short way to sort numeric value is as under:-

console.log(myArray.sort(function(a, b){return a-b}))

*/