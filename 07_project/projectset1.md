# Project related to DOM
## project link
[Click here]()
# Solution code
## project 1 - Color Changer

```JavaScript
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      default:
        body.style.backgroundColor = 'black';
    }
  });
});

```
## project 2 -  BMI Generator

```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');

  if (height == '' || height == 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight == '' || weight == 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```
## project 3 - Digital clock

```JavaScript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

```
## project 4 solution code

```JavaScript
```