let text='the Temperature is '+toCelsius(77) +' celsius';
console.log(text);
function toCelsius(f){
    return (5/9)*(f-32);
}