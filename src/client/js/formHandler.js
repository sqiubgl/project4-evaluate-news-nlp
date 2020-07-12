const fetch = require("node-fetch");

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  if (formText === "") {
    document.getElementById("results").innerHTML = "Please input some text!";
  } else {
    performAction("http://localhost:8081/api", formText);
  }

  // fetch("http://localhost:8081/api", {
  //   method: "POST",
  //   body: JSON.stringify({ formText }),
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById(
  //       "results"
  //     ).innerHTML = `Polarity: ${res.polarity} <br> Subjectivity: ${res.subjectivity} <br> Text: ${res.text} <br> Polarity Confidence: ${res.polarity_confidence} <br> Subjectivity confidence : ${res.subjectivity_confidence} `;
  //   });
}

function performAction(url, userInput) {
  postData(url, userInput).then((res) => updateUI(res));
}

const postData = async (url, formText = {}) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ formText }),
    headers: { "Content-Type": "application/json" },
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async (res) => {
  try {
    document.getElementById(
      "results"
    ).innerHTML = `Polarity: ${res.polarity} <br> Subjectivity: ${res.subjectivity} <br> Text: ${res.text} <br> Polarity Confidence: ${res.polarity_confidence} <br> Subjectivity confidence : ${res.subjectivity_confidence} `;
  } catch (error) {
    console.log("error", error);
  }
};
export { handleSubmit, postData };
