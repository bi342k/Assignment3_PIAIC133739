let myArray = [24, 53, 78, 91, 12];
let largNo=0;
document.write('Array Items: ')
for(let i=0; i < myArray.length; i++){
    document.write(myArray[i]+', ');
    if(largNo<myArray[i]){
        largNo=myArray[i];
    }
}

document.write('<br>Largent Number is '+largNo);

