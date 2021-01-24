//Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2rem";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  let paragraphStyling = paragraphs[i];

  paragraphStyling.style.color = "red";
}

//Question 6

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;

//Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function nameOfCats(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

nameOfCats(cats);

//Question 8


function createCats(cats) {
  let catData = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    catData += `<div>
    <h5> ${cats[i].name} </h5>
    <p> ${catAge} </p>
    </div>`;

    //const finalHtml = catData
  }
  return catData;
}

const newHtml = createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;

/*function createCats(cats) {
  let catData = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    catData += `
    <h5> ${cats[i].name} </h5>
    <p> ${catAge} </p>
    `;
  }

  const catHtml = `<div> ${catData} </div>`;
  return catHtml;
}

const newHtml = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHtml;
*/