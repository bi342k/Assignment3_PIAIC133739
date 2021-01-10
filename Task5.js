let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let arr2=[arr1[0]];
let present=false;
document.write('<h1>Orignal array</h1>')
for(let i=0;i<arr1.length;i++){
    document.write('<strong style="font-size:25px">'+arr1[i]+', </strong>')
}
for(let i=1;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            present=true;
            break;
        }
    }
    if(!present){
        arr2.push(arr1[i])
    } else {
        present=false;
    }
}
document.write('<h1>Modified array without duplication</h1>')
for(let i=0;i<arr2.length;i++){
    document.write('<strong style="font-size:25px">'+arr2[i]+', </strong>')
}