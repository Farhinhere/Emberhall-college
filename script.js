function validateform()
{
    let mobile=document.getElementById("mobile").value;
    let email=document.getElementById("email").value;
    if(!/^\d{10}$/.test(mobile))
{
    alert("Mobile number must have exactly 10 digits");
    return false;
}
    if(!email.includes("@"))
    {
        alert("email id must have @");
        return false;
    }
    alert("form submitted successfully!");
    return true;
}