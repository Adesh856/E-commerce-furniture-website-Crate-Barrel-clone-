let frominp=document.querySelector("form")
let emailinp=document.getElementById("email")
let passinp=document.getElementById("password");
let dataupls=JSON.parse(localStorage.getItem("formdata"))||[]
frominp.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formobj={
        Email:emailinp.value,
        Password:passinp.value,
    }
  dataupls.push(formobj)
   localStorage.setItem("formdata",JSON.stringify(dataupls))
})