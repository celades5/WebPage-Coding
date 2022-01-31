function doSomething(evt){
    var val = evt.target.value;//slider value

    // get the out put div
    var output = document.querySelector('#sliderValue');
    // display de value
    output.innerHTML = "Value selected:" + val;
}