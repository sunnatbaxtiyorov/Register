document.querySelector("#myFileInput").addEventListener("change",function () {
   const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    })

   reader.readAsDataURL(this.files[0]);
});


document.addEventListener("DOMContentLoaded", () =>{
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }
});

function deletePhoto() { 
    localStorage.removeItem("recent-image");
}



// function addName(){
//     const name = document.getElementById("name").value;
//     localStorage.setItem("name",name);
// }

// function addSurname(){
//     const surname = document.getElementById("surname").value;
//     localStorage.setItem("surname" , surname);
// }

// function addNumber(){
//     const number = document.getElementById("number").value;
//     localStorage.setItem("number" , number);
// }

// function addJob(){
//     const job = document.getElementById('job').value;
//     localStorage.setItem("job" , job);
// }

// function addGender(){
//     const gender = document.getElementById("gender").value;
//     localStorage.setItem("gender" , gender);
// }

const send = document.querySelector(".send");

// send.addEventListener("click",addSurname);
// send.addEventListener("click",addName );
// send.addEventListener("click",addNumber);
// send.addEventListener("click",addJob);
// send.addEventListener("click",addGender);

send.addEventListener("click",addInfo);



function addInfo(){
    const info = {
        name: document.getElementById('name').value,
        surname:document.getElementById("surname").value,
        phone : document.getElementById("number").value, 
        job : document.getElementById("job").value,
        gender : document.getElementById("gender").value
    }

    localStorage.setItem("info",JSON.stringify(info));
}


function resultBtn(){
    document.querySelector(".div").innerHTML = localStorage.getItem("info");
}