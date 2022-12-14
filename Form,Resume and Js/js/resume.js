function resume(){
    let firstname;
    firstname=document.getElementById('firstname').value;
    let middlename;
    middlename=document.getElementById('middlename').value;
    let lastname;
    lastname=document.getElementById('lastname').value;
    console.log(firstname);
    document.getElementById('name').innerHTML=firstname+middlename+lastname;
    
    
}