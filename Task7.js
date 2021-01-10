let a = [10,20,4,40,60,70];
document.write('<h2>Array a</h2>')
for(let i=0; i<a.length;i++){
    document.write(a[i]+', ')
}

let b = [1,2,3,4,5,6,7,8,9,10];
document.write('<h2>Array b</h2>')
for(let j=0; j<b.length;j++){
    document.write(b[j]+', ')
}

let flag=false;
for (let i = 0; i < a.length; i++){
    for (let j = 0; j < b.length; j++){
        if(a[i]===b[j]){
            flag=false;
            break;
        }
        else{
            flag=true;
        }
    }
    if(flag){
        b.push(a[i]);
        flag=false;
    }
}

document.write('<h2>Union of two arrays</h2>')

for(let k=0; k<b.length;k++){
    document.write(b[k]+', ')
}
