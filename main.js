document.getElementById('changeColor').onclick = function(){
    let red = Math.random() * 255 ;
    let green = Math.random() * 255 ;
    let blue = Math.random() * 255 ;

    document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;
}