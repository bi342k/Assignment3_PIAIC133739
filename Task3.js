//Array for three colors initialized
document.write('<h2>Original Array</h2>');
let colArr=['Red', 'Green', 'Blue'];
for (let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//a.   Add color at the begning of array
let option1 = prompt('Enter your color to add in the begning of the Array');
colArr.unshift(option1);
document.write('<h2>New Color Added in the begning</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//b.   Add color at the end of array
let option2 = prompt('Enter your color to add at the end of the Array');
colArr.push(option2);
document.write('<h2>New Color Added at the end</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//c.   Two colors added at the begning of array
colArr.unshift('Black', 'White');
document.write('<h2>Two New Colors Added at the begning</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//d.   First color deleted from the begning of the array
colArr.shift();
document.write('<h2>First color removed from begning of array</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//e.   Last color deleted from the begning of the array
colArr.pop();
document.write('<h2>Last color removed from begning of array</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//f.   Add color between array 
let option3 = Number(prompt('Enter index at which you want to add color'));
let option4 = prompt('Enter your color to add at in Array');
colArr.splice(option3, 0, option4);
document.write('<h2>New Color Added at '+option3+' index</h2>');
for(let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

//g.   Remove color between array 
let option5 = Number(prompt('Enter index at which you want to delete color'));
let option6 = Number(prompt('Enter enter number of colors you want to delete'));
if (option5 < colArr.length && option6+option5 <= colArr.length){
    colArr.splice(option5, option6);
    document.write('<h2> 0'+option6+'Color(s) from index '+option5+' deleted</h2>');
    for(let i=0; i<colArr.length;i++){
        document.write('<h4>'+colArr[i]+'</h4>');
    }
}
else{
    document.write('<h3>You entered wrong index or length</h3>')
}