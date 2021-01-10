let aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
let o = ["th","st","nd","rd"];
let s=1
for(let i=0; i< aCities.length;i++){
    switch(s){
        case 1:{
            document.write('<h3>'+s+o[s]+' Choice is '+aCities[i]+'</h3>')
            s+=1; 
            break;
        }
        case 2:{
            document.write('<h3>'+s+o[s]+' Choice is '+aCities[i]+'</h3>')
            s+=1;
            break;
        }
        case 3:{
            document.write('<h3>'+s+o[s]+' Choice is '+aCities[i]+'</h3>')
            s+=1;
            break;
        }
        default:{
            document.write('<h3>'+s+o[0]+' Choice is '+aCities[i]+'</h3>')
            s+=1;
        }

    }
    
}