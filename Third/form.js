let OpenForm=document.getElementById("OpenForm");
let CloseForm=document.getElementById("CloseForm");
let form=document.getElementById("form");


OpenForm.onclick=function()
{
form.style.display='block';
document.getElementById("body").style.backgroundColor='grey';
}


CloseForm.onclick=function()
{
form.style.display='none';
document.getElementById("body").style.backgroundColor='white';
}

