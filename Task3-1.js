document.write('<h2>Original Array</h2>');
let colArr=['Red', 'Green', 'Blue', 'Black', 'White'];
for (let i=0; i<colArr.length;i++){
    document.write('<h4>'+colArr[i]+'</h4>');
}

let option = prompt('Select your color add option'+
 '\n a or A to add color at begning '+
 '\n b or B to add color at end ' +
 '\n c or C to add two more color ' +
 '\n d or D to delete first color ' +
 '\n e or E to delete last color ' +
 '\n f or F to add color(s) between colors ' +
 '\n g or G to delete color(s) between colors '
 );

switch(option){
    case 'a' || 'A':
    {
        let option1 = prompt('Enter your color to add in the begning of the Array');
        colArr.unshift(option1);
        document.write('<h2>New Color Added in the begning</h2>');
        for(let i=0; i<colArr.length;i++){
            document.write('<h4>'+colArr[i]+'</h4>');
        }
        break;
    }
    case 'b' || 'B':
    {
        let option2 = prompt('Enter your color to add at the end of the Array');
        colArr.push(option2);
        document.write('<h2>New Color Added at the end</h2>');
        for(let i=0; i<colArr.length;i++){
            document.write('<h4>'+colArr[i]+'</h4>');
        }
        break;
    }
    case 'c' || 'C':
    {
        colArr.unshift('Gray', 'Brown');
        document.write('<h2>New Color Added at the end</h2>');
        for(let i=0; i<colArr.length;i++){
            document.write('<h4>'+colArr[i]+'</h4>');
        }
        break;
    }
    case 'c' || 'C':
    {
        colArr.unshift('Black', 'White');
        document.write('<h2>New Color Added at the end</h2>');
        for(let i=0; i<colArr.length;i++){
            document.write('<h4>'+colArr[i]+'</h4>');
        }
        break;
    }
    case 'd' || 'D':
    {
            
        break;
    }
    case 'e' || 'E':
    {

        break;
    }
    case 'f' || 'F':
    {

        break;
    }
    case 'g' || 'G':
    {

        break;
    }
    default:
        alert('You selected wrong option');
}



