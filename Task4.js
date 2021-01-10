let cityArray = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write('<h2>Cities list:</h2>');
for (let i=0;i<cityArray.length;i++){
    document.write('<strong>'+cityArray[i]+', </strong>')
}

let selCityArray = cityArray.slice(2, 4);
document.write('<h2>Selected Cities list:</h2>');
for (let i=0;i < selCityArray.length;i++){
    document.write('<strong>'+selCityArray[i]+', </strong>')
}