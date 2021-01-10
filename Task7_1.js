let a = [10,20,4,40,60,70];
let b = [1,2,3,4,5,6,7,8,9,10];
let c = []
let j=0
let present = false;
for(let i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]===b[j]){
            present=true;
            break;
        }
    }
    if(!present){
        b.push(a[i]);
    }else{
        present=false;
    }
}

console.log(b)