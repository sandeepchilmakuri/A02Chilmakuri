function cal()
{
var mov=document.getElementById('m1').value;
var result=document.getElementById('result');
var myresult=mov*8;
result.value=myresult;


}
    function res()
    {
var mov=document.getElementById('m1').value;
if( mov>0)
{

        document.getElementById("r").innerHTML="Your booking is confirmed";
    }
    else{
        document.getElementById("r").innerHTML="Please enter a valid Number of Tickets"
    }
    }