//take data 
let LSdataform = JSON.parse(localStorage.getItem("formdata")) || []

let fromout = document.querySelector("form")
let emailout = document.getElementById("email")
let passout = document.getElementById("password");
fromout.addEventListener("submit", (e) => {
   e.preventDefault()
    LSdataform.forEach((ele, index) => {
        if (ele.Email == emailout.value && ele.Password == passout.value) {
            window.open("./main.html")
        } else if (ele.Email == emailout.value && ele.Password != passout.value) {
        }
        else if (ele.Email != emailout.value && ele.Password == passout.value) {
            
        }
        else if (ele.Email != emailout.value && ele.Password != passout.value) {
           1
        }
    });
})