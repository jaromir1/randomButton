function myfunc() {

    function ranRgb() {
        return Math.floor(Math.random()*256);
    }  

    function ranDis() {
        return Math.floor(Math.random()*70);
    }

    function ranWight () {
        return Math.floor(Math.random()*120)
    }
  
    var len = 
    document.body.children.length;

    var ranLen =
    Math.floor(Math.random()*len);


    var newbtn =
    document.createElement("BUTTON");
    
    var newColor = "rgb("+ranRgb()+","+ranRgb()+","+ranRgb()+")";
    newbtn.style.backgroundColor = newColor;
  
    var newDis = ranDis()+"px";
    newbtn.style.marginLeft = newDis;

    var Newlek = ranWight()+"px";
    newbtn.style.width = Newlek

    document.body.children[ranLen].append(newbtn);
    

}