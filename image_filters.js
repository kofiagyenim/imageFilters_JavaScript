<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js" >
    //I used Duke's Learn To Program utility class Simple Image to implement these
 

 //this function makes an image red by increasing the R value in the RGB of a pixel 
function makeredlarge(imagename) {
    var image = new SimpleImage(imagename);
    for(var i of image.values()){
        i.setRed(255)
    }
    return image
}

//removes all red pixels(sets them to their least value to re-create a greenish-blue hue
function removeallred(imagename){
    var image = new SimpleImage(imagename);
    for(var i of image.values()){
        i.setRed(0);
    }
    return image
}
//this function decreases the redness by setting R values greater than 70 to 70
function lessred(imagename) {
    var image = new SimpleImage(imagename)
    for(var i of image.values()){
        var red = i.getRed()
        if (red>70){
            i.setRed(70)
        }
    }
    return image
}

//this function creates a black line at the bottom of an image
function blackbottom(imagename) {
    var image = new SimpleImage(imagename)
    var height = image.getHeight()
    var lastten = height -10
    for(var i of image.values()){
        if (i.getY()>= lastten){
            i.setRed(0)
            i.setGreen(0)
            i.setBlue(0)
        }
    }
    
    return image
    
}
//this function creates three blocks of red,green and blue equally across the width of the image
function threeverticalstripes(imagename) {
    var image = new SimpleImage(imagename)
    var width = image.getWidth()
    var onethird = width / 3
    var twothird = onethird * 2
    for(var i of image.values()){
        if(i.getX() <= onethird){
            i.setRed(255)
        }
        if (i.getX() >onethird && i.getX() <=twothird) {
            i.setGreen(255)
        }
        if (i.getX() >twothird) {
            i.setBlue(255)
        }
    }
    return image
}
