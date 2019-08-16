// alert("hello");
x=document.getElementById("text666");
function Bold()
{
    
    if(x.style.fontWeight!="bold")
    {
        x.style.fontWeight="bold";
    }
    else{
        x.style.fontWeight="normal";
    }
}
function makeItalic(){
    if(x.style.fontStyle!="italic")
    {
        x.style.fontStyle="italic";
    }
    else{
        x.style.fontStyle="normal";
    }
}
function makeUnderline(){
    if(x.style.textDecoration=="underline"){
       x.style.textDecoration="none";
    }
    else{
        x.style.textDecoration="underline";
    }
}

function selcts(){
x.style.fontSize=document.getElementById('size').value;
}
function selctsf(){
    x.style.fontFamily=document.getElementById('font').value;
}
