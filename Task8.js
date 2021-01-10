document.write('a. Counting : ')
for (let a=1; a<=15;a++){
    document.write(a+', ');
}

document.write('<br>');
document.write('b. Reverse Counting : ')
for (let b=10; b >= 1; b--){
    document.write(b+', ');
}

document.write('<br>');
document.write('c. Even : ')
for (let c=0; c <= 20; c++){
    if(c%2 === 0){
        document.write(c+', ');
    }
}

document.write('<br>');
document.write('d. Odd : ')
for (let d=0; d <= 20; d++){
    if(d%2 != 0){
        document.write(d+', ');
    }
}

document.write('<br>');
document.write('d. Series : ')
for (let d=1; d <= 20; d++){
    if(d%2 === 0){
        document.write(d+'K, ');
    }
}