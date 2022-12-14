// function signUp(){

//     const userData = {
//         user_name: document.getElementById('user_name').value,
//         user_name: document.getElementById('first_name').value,
//         user_name: document.getElementById('last_name').value,
//         email: document.getElementById('email').value,
//         user_pass_1: document.getElementById('pass1').value,
//         user_pass_2: document.getElementById('pass2').value,
//     };

//     localStorage.setItem("user_data", JSON.stringify(userData));
// }

//     function getData(){
//         let user_data =   JSON.parse(localStorage.getItem("user_data"));
//         return user_data;
//     }

//     function signIn(){

//         let data = getData();
   
//         let user_name = document.getElementById('user_name').value;
//         let user_pass = document.getElementById('user_pass_1').value;
   
//         if (data.user_name == user_name && data.user_pass == user_pass) {
//          window.location.href = "index.html";
//              alert("login success");
            
//         } else {
//           alert("login fail");
//         }
//       }

//       function logOut(){
//         localStorage.removeItem("user_data")
//       }

// function changeColor(){
//     document.i.style.color = 'red';
// }
// function getData(){
//     // localStorage.removeItem("user_data");
//   let user_data =   JSON.parse(localStorage.getItem("user_data"));
//     document.getElementById("user_name").innerHTML = user_data.first_name;
//     console.log(user_data.user_name);
//   }
//   getData();

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remover("active");
}))