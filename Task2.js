let studentName = ['Michael', 'John', 'Tony'];
let studentMarks = [320, 230, 480] ;
let totalMarks=500;
for(let i=0; i<studentName.length; i++){
    document.write('<h2>Score of '
    +studentName[i]
    +' is '
    +studentMarks[i]
    +'. Percentage: '
    +(studentMarks[i]*100/totalMarks)
    +'%</h2>');
}