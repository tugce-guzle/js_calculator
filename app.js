function dark(){
    document.body.style.backgroundColor='#2a2a2a';
    document.getElementById('title').style.color='white';
    for (i=0 ; i<=5 ; i++)
    {
        document.getElementsByClassName('process')[i].style.backgroundColor= "#B4A0FF" ;
    }
    for (i=0 ; i<=9 ; i++){
        document.getElementsByClassName('numbers')[i].style.backgroundColor= "#409AE1";
    }
    document.getElementById('inputfield').style.backgroundColor="#40C5AF";
}
function light(){
    document.body.style.backgroundColor="white";
    document.getElementById('title').style.color='black';
    for (i=0 ; i<=5 ; i++)
    {
        document.getElementsByClassName('process')[i].style.backgroundColor= "#9C27B0" ;
    }
    for (i=0 ; i<=9 ; i++){
        document.getElementsByClassName('numbers')[i].style.backgroundColor= "#266BB0";
    }
    document.getElementById('inputfield').style.backgroundColor="#58DCBD";
}
