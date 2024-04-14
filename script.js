let formData = [];
let err = document.getElementById("err");




const msg = document.getElementById("msg");
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let filled = true;
  const formiput = this.elements;
  for (let i = 0; i < formiput.length; i++) {
    let input = formiput[i];
    if (input.type !== "submit" && input.value === "") {
      filled = false;
      break;
    }
  }
  if (filled === false) {
    msg.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    msg.style.color = "red";
  } else {
    msg.textContent = "Success : Employee Added!";
    msg.style.color = "green";
    let object = {};
    for (let i = 0; i < formiput.length; i++) {
      let input = formiput[i];
      if (input.type !== "submit") {
        object[input.name] = input.value;
      }
    }
    formData.push(object);

    err.style.display = "none";
    print();
  }
});

function print() {
  let colum = document.getElementById("colum");
  colum.innerHTML = ""; //clear previous html
  formData.forEach((value, index) => {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    colum.appendChild(container);
    let curve = document.createElement("div");
    curve.setAttribute("class", "curve");
    let id = document.createElement("p");
    id.setAttribute("id", "id");
    id.textContent = `${index + 1}.`;
    let named = document.createElement("p");
    named.textContent = `Name: ${value.name}`;
    let professiond = document.createElement("p");
    professiond.textContent = `Profession: ${value.profession}`;
    let aged = document.createElement("p");
    aged.setAttribute("id", "aged");
    aged.textContent = `Age: ${value.age}`;
    let del = document.createElement("button");

// Add a class 
del.classList.add("delete-button");

    del.textContent = "Delete User";
    del.addEventListener("click",()=>delw(index));
    //append container
    container.appendChild(curve);
    container.appendChild(del);
    //append curv
    curve.appendChild(id);
    curve.appendChild(named);
    curve.appendChild(professiond);
    curve.appendChild(aged);
  });
}
function delw(indexToDelete) {
    formData.splice(indexToDelete, 1);
    print();
}
