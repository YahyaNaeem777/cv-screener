console.log("helloooo");
const data = [
  {
    name: "yahya",
    age: 20,
    city: "Mingora",
    language: "Javascript",
    frameWork: "Reactjs",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Imran",
    age: 23,
    city: "Mardan",
    language: "Dart",
    frameWork: "Flutter",
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "Kashif",
    age: 21,
    city: "Shergarh",
    language: "Java",
    frameWork: "Andriod",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Hameed",
    age: 24,
    city: "Peshawar",
    language: "Python",
    frameWork: "Flask",
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
  },
  {
    name: "yahya",
    age: 20,
    city: "Mingora",
    language: "Javascript",
    frameWork: "Reactjs",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "yahya",
    age: 20,
    city: "Mingora",
    language: "Javascript",
    frameWork: "Reactjs",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "yahya",
    age: 20,
    city: "Mingora",
    language: "Javascript",
    frameWork: "Reactjs",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

// for (let i = 0; i <= data.length; i++) {
//   let hel = JSON.stringify(data[i]);
//   console.log(hel);
// }

function iterateData(values) {
  let indexCount = 0;

  return {
    next: function () {
      return indexCount < values.length
        ? { value: values[indexCount++], done: false }
        : { done: true };

      // if (indexCount < values.length) {
      //   return {
      //     value: values[indexCount++],
      //     done: false,
      //   };
      // } else {
      //   done: true;
      // }
    },
  };
}

const candidate = iterateData(data);
nextCV();
let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidate.next().value;
  let image = document.getElementById("image");
  const profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img 'src=${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">${currentCandidate.name}</li>
  <li class="list-group-item">${currentCandidate.age}</li>
  <li class="list-group-item">${currentCandidate.city}</li>
  <li class="list-group-item">${currentCandidate.language}</li>
  <li class="list-group-item">${currentCandidate.frameWork}</li>

</ul>`;
  } else {
    alert("End of candidate Applications");
  }

  //   profile.innerHTML = `
  //   <ul class="list-group">
  //   <li class="list-group-item">${currentCandidate.name}</li>
  //   <li class="list-group-item">${currentCandidate.age}</li>
  //   <li class="list-group-item">${currentCandidate.city}</li>
  //   <li class="list-group-item">${currentCandidate.language}</li>
  //   <li class="list-group-item">${currentCandidate.frameWork}</li>
  // </ul>`;
  //
}
