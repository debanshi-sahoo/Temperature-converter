let celsius= document.getElementById("celsius");
let fahrenheit= document.getElementById("fahrenheit");
function CelToFar()
{
    let result=(parseFloat(celsius.value) * 9/5) + 32;
    fahrenheit.value=parseFloat(result.toFixed(2));

}
function FarToCel()
{
    let result=(parseFloat(fahrenheit.value)-32) * 5/9;
    celsius.value=parseFloat(result.toFixed(2));
    console.log(result);
}