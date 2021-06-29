
function bus()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="block";
    e3.style.display="none";
    e4.style.display="none";
    e5.style.display="none";
    e6.style.display="none";
    e7.style.display="none";
    e8.style.display="none";
}
function ttt()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="block";
    e4.style.display="none";
    e5.style.display="none";
    e6.style.display="none";
    e7.style.display="none";
    e8.style.display="none";
}

function login()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="none";
    e4.style.display="block";
    e5.style.display="none";
    e6.style.display="none";
    e7.style.display="none";
    e8.style.display="none";
}

function snake()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="none";
    e4.style.display="none";
    e5.style.display="block";
    e6.style.display="none";
    e7.style.display="none";
    e8.style.display="none";
}
function introAboutMe()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="none";
    e4.style.display="none";
    e5.style.display="none";
    e6.style.display="block";
    e7.style.display="none";
    e8.style.display="none";
}
function git()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="none";
    e4.style.display="none";
    e5.style.display="none";
    e6.style.display="none";
    e7.style.display="block";
    e8.style.display="none";
}
function youtube()
{
    var e1 =document.getElementById("base");
    var e2 =document.getElementById("bus");
    var e3 =document.getElementById("ttt");
    var e4 =document.getElementById("login");
    var e5 =document.getElementById("snake");
    var e6 =document.getElementById("introAbooutMe");
    var e7 =document.getElementById("git");
    var e8 =document.getElementById("youtube");

    e1.style.display="none";
    e2.style.display="none";
    e3.style.display="none";
    e4.style.display="none";
    e5.style.display="none";
    e6.style.display="none";
    e7.style.display="none";
    e8.style.display="block";
}
function validate() {
      
    if( document.myForm.FName.value == "" ) {
       alert( "Please provide your First name!" );
       document.myForm.FName.focus() ;
       return false;
    }
    if( document.myForm.LName.value == "" ) {
        alert( "Please provide your Last name!" );
        document.myForm.LName.focus() ;
        return false;
     }
    if( document.myForm.gender.value != "male" && document.myForm.gender.value != "female" && document.myForm.gender.value != "other" ) {
       
        alert( "Please Select your Gender" );
        document.myForm.gender.focus() ;
        return false;
     }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.email.focus() ;
       return false;
    }
    if( document.myForm.mobile.value == "" || document.myForm.mobile.value.length != 10 ) {
       
       alert( "Please provide 10 digit valid mobile number" );
       document.myForm.mobile.focus() ;
       return false;
    }
    if( document.myForm.age.value == "" || document.myForm.age.value.length > 2 ) {
       
        alert( "Please provide valid age" );
        document.myForm.age.focus() ;
        return false;
     }
     if(document.myForm.street1.value=="" || document.myForm.street2.value=="" ||document.myForm.city.value=="" || document.myForm.district.value=="" || document.myForm.pin.value=="" )
     {
        alert("Please Provide Valid Address");
        document.myForm.street1.focus() ;
        return false
     }
    if( document.myForm.duration.value == "0" ) {
       alert( "Please Choose Membership Duration!" );
       document.myForm.duration.focus() ;
       return false;
    }
    if( document.myForm.plan.value == "0" ) {
        alert( "Please Choose Membership Plan!" );
        document.myForm.plan.focus() ;
        return false;
     }
     if(document.myForm.agreetc.checked==false || document.myForm.agreep.checked==false)
     {
         alert("Please accept our Policy and Terms & Condition");
         document.myForm.agreetc.focus() ;
         document.myForm.agreep.focus() ;
         return false
     }
    return( true );
 }
function generatebill()
{
    var p = document.myForm.plan.value;
    var d = document.myForm.duration.value;
    var b = (p * d)-(((p * d)*d)/100);
    if(p=="0" || d=="0")
    {
        alert('Please Choose a valid Plan');
        document.myForm.bill.value ="";
    }
    else
    {
        alert('Bill Generated '+b+' Rs');
        document.myForm.bill.value = b+" Rs";
    }
   
}
function check()
{
    if(document.myForm.bill.value=="" || document.myForm.bill.value=="0")
    {
        alert('Please Generate Bill In order to Proceed');
        return false;
    }
    else{
        if(validate()==true)
        {
            alert('Form Submitted Successfully....');
            document.getElementById("topHeader").innerHTML = "Thank you.... For Purchasing Our Membership";
        }
    }
}