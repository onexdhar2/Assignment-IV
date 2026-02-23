// Adding a Array
let interview2 = [];
let rejected2 = [];
let currentStatus = "all";
// Adding a Array

// catch all main three element
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
// catch all main three element

// catch all details information cards
const allcards = document.getElementById("allcards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filter-section");
// catch all details information cards

// catch all three sub element to filter
const allFilter = document.getElementById("all-filter");
const interviewFilter = document.getElementById("interview-filter");
const rejectFilter = document.getElementById("reject-filter");
// catch all three sub element to filter

// all informations show a number in All Element
function showTotal() {
  total.innerHTML = allcards.children.length;
  interview.innerHTML = interview2.length;
  rejected.innerHTML = rejected2.length;
}
showTotal();
// all informations show a number in All Element

// button toogolling
function toggleStyle(id) {
  allFilter.classList.remove("bg-gray-500", "text-white");
  interviewFilter.classList.remove("bg-gray-500", "text-white");
  rejectFilter.classList.remove("bg-gray-500", "text-white");

  allFilter.classList.add("bg-gray-300", "text-black");
  interviewFilter.classList.add("bg-gray-300", "text-black");
  rejectFilter.classList.add("bg-gray-300", "text-black");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.add("bg-gray-500", "text-white");
  selected.classList.remove("bg-gray-300", "text-black");

  if (id == "interview-filter") {
    filterSection.classList.remove("hidden");
    allcards.classList.add("hidden");
    renderInterview();
  } else if (id == "all-filter") {
    allcards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "reject-filter") {
    allcards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderReject();
  }
}
// button toogolling

// cathcing details main function

mainContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("interviewButton")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const proffession = parentNode.querySelector(".proffession").innerText;
    const jobDetais = parentNode.querySelector(".jobDetais").innerText;
    const isApplied = parentNode.querySelector(".isApplied").innerText;
    const companyTitle = parentNode.querySelector(".companyTitle").innerText;

    const cardDetails = {
      parentNode,
      companyName,
      proffession,
      jobDetais,
      isApplied: "Interview",
      companyTitle,
    };
    const company = interview2.find(
      (item) => item.companyName == cardDetails.companyName,
    );

    parentNode.querySelector(".isApplied").innerText = "Interview";
    if (!company) {
      interview2.push(cardDetails);
    }
    rejected2 = rejected2.filter(
      (item) => item.companyName != cardDetails.companyName,
    );
    if (currentStatus == "reject-filter") {
      renderReject();
    }
    showTotal();
  }
  // Reject Area
  else if (event.target.classList.contains("rejectButton")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const proffession = parentNode.querySelector(".proffession").innerText;
    const jobDetais = parentNode.querySelector(".jobDetais").innerText;
    const isApplied = parentNode.querySelector(".isApplied").innerText;
    const companyTitle = parentNode.querySelector(".companyTitle  ").innerText;
    parentNode.querySelector(".isApplied").innerText = "Reject";

    const cardDetails = {
      parentNode,
      companyName,
      proffession,
      jobDetais,
      isApplied: "Reject",
      companyTitle,
    };
    const company = rejected2.find(
      (item) => item.companyName == cardDetails.companyName,
    );

    if (!company) {
      rejected2.push(cardDetails);
    }
    interview2 = interview2.filter(
      (item) => item.companyName != cardDetails.companyName,
    );
    if (currentStatus == "interview-filter") {
      renderInterview();
    }
    showTotal();
  }
});
// cathcing details

function renderInterview() {
  filterSection.innerHTML = "";
  for (let interviewPart of interview2) {
    console.log(interviewPart);
    let div = document.createElement("div");
    div.className =
      "cardOne flex justify-between mb-10 bg-base-200 shadow-md p-5";
    div.innerHTML = `
<div class="content">
            <h3 class="text-xl font-semibold companyName">${interviewPart.companyName}</h3>
            <p class="text-gray-400 mb-3 proffession">${interviewPart.proffession}React Native Developer</p>
            <p class="text-[15px] mb-3 jobDetais">${interviewPart.jobDetais}
              Remote • Full-time • $130,000 - $175,000
            </p>
            <p class="mb-3 isApplied">${interviewPart.isApplied}</p>
            <p class="mb-3 companyTitle">${interviewPart.companyTitle}
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <div class="btn-tab">
              <button class="btn btn-outline btn-accent">INTERVIEW</button>
              <button class="btn btn-outline btn-error">REJECTED</button>
            </div>
          </div>
          <i class="fa-solid fa-trash"></i>

    `;
    filterSection.appendChild(div);
  }
}
function renderReject() {
  filterSection.innerHTML = "";
  for (let rejectPart of rejected2) {
    console.log(rejectPart);
    let div = document.createElement("div");
    div.className =
      "cardOne flex justify-between mb-10 bg-base-200 shadow-md p-5";
    div.innerHTML = `
<div class="content">
            <h3 class="text-xl font-semibold companyName">${rejectPart.companyName}</h3>
            <p class="text-gray-400 mb-3 proffession">${rejectPart.proffession}React Native Developer</p>
            <p class="text-[15px] mb-3 jobDetais">${rejectPart.jobDetais}
              Remote • Full-time • $130,000 - $175,000
            </p>
            <p class="mb-3 isApplied">${rejectPart.isApplied}</p>
            <p class="mb-3 companyTitle">${rejectPart.companyTitle}
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <div class="btn-tab">
              <button class="btn btn-outline btn-accent">INTERVIEW</button>
              <button class="btn btn-outline btn-error">REJECTED</button>
            </div>
          </div>
          <i class="fa-solid fa-trash"></i>

    `;
    filterSection.appendChild(div);
  }
}

// delet function
let delet1 = document.getElementById("hideBtn1");
let singleCard1 = document.getElementById("item1");

let delet2 = document.getElementById("hideBtn2");
let singleCard2 = document.getElementById("item2");

let delet3= document.getElementById("hideBtn3");
let singleCard3= document.getElementById("item3");

let delet4= document.getElementById("hideBtn4");
let singleCard4= document.getElementById("item4");

let delet5= document.getElementById("hideBtn5");
let singleCard5= document.getElementById("item5");

let delet6= document.getElementById("hideBtn6");
let singleCard6= document.getElementById("item6");

let delet7 = document.getElementById("hideBtn7");
let singleCard7 = document.getElementById("item7");

let delet8 = document.getElementById("hideBtn8");
let singleCard8 = document.getElementById("item8");
delet1.addEventListener("click", () => {
  singleCard1.classList.add("hide");
});
delet2.addEventListener("click", () => {
  singleCard2.classList.add("hide");
});
delet3.addEventListener("click", () => {
  singleCard3.classList.add("hide");
});
delet4.addEventListener("click", () => {
  singleCard4.classList.add("hide");
});
delet5.addEventListener("click", () => {
  singleCard5.classList.add("hide");
});
delet6.addEventListener("click", () => {
  singleCard6.classList.add("hide");
});
delet7.addEventListener("click", () => {
  singleCard7.classList.add("hide");
});
delet8.addEventListener("click", () => {
  singleCard8.classList.add("hide");
});
