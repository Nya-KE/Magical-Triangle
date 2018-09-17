//document.getElementByClass('RESPONSE')
//document.getElementByClass('MAGICAns')
//document.getElementByClass('FIELD')
//<input type="button" value="Find Out" onclick="pressTo()"> initially used button in HTML File

function pressTo() {

    var sideA = document.getElementById('SideA').value
    var sideB = document.getElementById('SideB').value
    var sideC = document.getElementById('SideC').value
    var tri = document.getElementById('tri')

    var triangleSides = []
     triangleSides.push(sideA)
     triangleSides.push(sideB)
     triangleSides.push(sideC)
     console.log(triangleSides)

    /*
    console.log(triangle.push(){
      triangle.charAt[0] ;
      triabglechar[1] = sideB;
      char[2] = sideC;)
    })*/

    if(sideA == sideB && sideA == sideC){
        alert("Equilateral")
        //method 1 jquery?
        tri.style.display = "block";
        //method 2 hide and show toggle attempt which causes default to JavaScript style for value 'tri' located in HTML, overriding display none ine CSS
        //document.getElementsByClassName('tri').style.display = "block"
    } else if(sideA == sideB || sideA == sideC || sideB == sideC){
        //note varied code direct ÍD or js variable for experimenting with concise code
        alert("Isosceles")
        document.getElementById('tri2').style.display = "block"
    } else if (sideA + sideB <= SideC || sideC + sideA <= SideB || sideC + sideB <= SideA) {
        alert("Not a Triangle")
        document.getElementById('not').style.display = "block"
    } else if (SideA !== sideB && sideA !== sideC && sideB !== sideC) {
        alert("Scalene") //YET TO BE CORRECTLY RESOLVED AS EVEN VALUES 4,7,9 which defy previous if statement did not result to 'Scalene'alert
        document.getElementById('tri2').style.display = "block"
    }


}//ends 'pressTo'function
