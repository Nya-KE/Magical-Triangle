//document.getElementByClass('RESPONSE')
//document.getElementByClass('MAGICAns')
//document.getElementByClass('FIELD')
function pressTo() {

    var sideA = document.getElementById('SideA').value
    var sideB = document.getElementById('SideB').value
    var sideC = document.getElementById('SideC').value

    if(sideA == sideB && sideA == sideC){
        alert("Equilateral")
        return document.getElementByClass('tri').style.display = "inline"//causes default to something visible ovverriding displaynone in CSS;
    } else if(sideA == sideB || sideA == sideC || sideB == sideC){
        alert("Isosceles")
    } else if (sideA + sideB < SideC || sideC + sideA < SideB || sideC + sideB < SideA) {
        alert("Not a triangle")

    }
      else {alert("Scalene")
    }


}//ends 'pressTo'function
