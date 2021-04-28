

    let inicio = prompt("Enter your name");

    document.querySelector("body").style.display = "none";

    if (inicio === "Ricardo") {
        alert("Welcome Ricardo")
        document.querySelector("body").style.display = "block";
    }
    else if (inicio == null) {
        alert("Please enter a valid name");
    }

    else {
        alert("Sorry but you are not Ricardo")
    }



window.onscroll = function() {Function()};

let header = document.getElementById("header");
let header2 = header.offsetTop;

function Function() {
  if (window.pageYOffset > header2) {
    header.classList.add("header2");
  } else {
    header.classList.remove("header2");
  }
}

