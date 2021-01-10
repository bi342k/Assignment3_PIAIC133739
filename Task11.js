let myItems = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let itemSearch = prompt('Welcome to  my ABC Bakery. What do you want to order sir/maam');
let flag = false;

for (let i = 0; i < myItems.length; i++){
    if (itemSearch.toLowerCase() === myItems[i]){
        document.write(itemSearch+' is <strong>available</strong> at index '+i+' in our bakery');
        flag = true;
        break;
    }
}
console.log(flag)
if (!flag){
    document.write('We are sorry '+itemSearch+' is <strong>not available</strong> in our bakery');
}