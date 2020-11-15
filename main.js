var pictures=["Father.gif", "Mother.jpg", "Son.jpg", "Daughter.jpg"];
var i=0;

var names=["Bhaskarjyoti Deuri", "Niharika Buragohain", "Abhigyan Prakash", "Anwesha Priyam"];
var j=0;
function next(){
    document.getElementById("family_slide").src=pictures[i];
    i++;
    
    document.getElementById("family_name").innerHTML=names[j];
    j++
      
    if(i>4&&j>4)
    {
        i=0;

        j=0;

        document.getElementById("family_slide").src=pictures[i];
        i++;
        

        document.getElementById("family_name").innerHTML=names[j];
        j++
    };
};