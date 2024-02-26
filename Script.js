const Firstnamefiled=document.getElementById("inputname");
const Lastnamefield=document.getElementById("inputname2");
const emailfield=document.getElementById("inputEmail");

const collegefield=document.getElementById("inputcollgeName");

const rollfield=document.getElementById("Inputroll");
const yearfield=document.getElementById("Inputyear");

const publishbtn = document.getElementById("publish-btn");
function validation(){
  if(Firstnamefiled.value.trim()==""||Lastnamefield.value.trim()==""||emailfield.value.trim()==""||collegefield.value.trim()==""||rollfield.value.trim()==""||yearfield.value.trim()==""){
    alert("Plaease fill all the Detalis");
    return false;
  }
  else{
    true;
  }
}
async function publish() {
    const Firstname =Firstnamefiled.value;
    const Lastname = Lastnamefield.value;
    const email = emailfield.value;
    
    const college=collegefield.value;
   
    const roll=rollfield.value;
    const year=yearfield.value;
    
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Firstname, Lastname,email,college,roll,year}),
    });
  }
  
  publishbtn.addEventListener("click", (e) => {
    e.preventDefault();
    publish();
    
    Firstnamefiled.value="";
    Lastnamefield.value="";
    emailfield.value="";
  
    
    collegefield.value="";
   
    rollfield.value="";
    yearfield.value="";
    
    
  });