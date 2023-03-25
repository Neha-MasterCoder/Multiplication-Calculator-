function createtable (){

    var number=document.getElementById ('number') .value;
    var table=document.getElementById ('Table') ;
    table.innerHTML="";
    
    for (var a=1; a<=15; a++) {

    var row=table.insertRow();
    var col1=row.insertCell ();
    var col2=row.insertCell ();

    var product= a*number;

    col1.innerHTML= number + "x" + a + "=" ;
    col2.innerHTML= product;
    }



}
