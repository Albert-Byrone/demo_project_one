let result = document.getElementById("result");
let popup = document.getElementById("popup");

const submitData = () => {
  let marks = parseFloat(document.getElementById("marks").value);
  let grades = "";
  if (marks >= 0 && marks <= 100) {
    if (marks > 79) {
      grades = "A";
    } else if (marks > 59 && marks < 79) {
      grades = "B";
    } else if (marks > 49 && marks <= 59) {
      grades = "C";
    } else if (marks > 39 && marks <= 49) {
      grades = "D";
    } else if (marks < 40) {
      grades = "E";
    }

    result.innerHTML = `You have ${grades} of ${marks}`;
    popup.classList.add("show-popup");
  } else {
    result.innerHTML = "Kindly give valid values";
    popup.classList.add("show-popup");
  }
};

const closePopup = () => {
  popup.classList.remove("show-popup");
};
