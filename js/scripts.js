//document.getElementByClass('RESPONSE')
//document.getElementByClass('MAGICAns')
//document.getElementByClass('FIELD')
//<input type="button" value="Find Out" onclick="pressTo()"> initially used button in HTML File

function pressTo() {

    var sideA = document.getElementById('SideA').value
    var sideB = document.getElementById('SideB').value
    var sideC = document.getElementById('SideC').value

    if(sideA == sideB && sideA == sideC){
        alert("Equilateral")
        return document.getElementByClass('tri').style.display = "inline"//causes default to JavaScript style for value 'tri' located in HTML, overriding display none ine CSS
    } else if(sideA == sideB || sideA == sideC || sideB == sideC){
        alert("Isosceles")
    } else if (sideA + sideB >= SideC || sideC + sideA >= SideB || sideC + sideB >= SideA) {
        alert("Scalene")
    }
      else {alert("Not a Triangle")
    }


}//ends 'pressTo'function
