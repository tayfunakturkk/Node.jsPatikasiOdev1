const arguments =process.argv.slice(2);
function AreaOfTheCircle(radius) {
    let area=radius*radius*Math.PI

    if(radius<0){
        console.log("Yarıçap eksi değer alamaz!!!")
    }

    else 
    console.log("Yarıçapı "+(radius)+ " olan dairenin alanı:"+area)
    
}
//AreaOfTheCircle(5);
AreaOfTheCircle(arguments[0]*1);