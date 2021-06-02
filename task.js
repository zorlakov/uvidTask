function solveTask() {
  document.getElementById('output').innerHTML = '';

  var arraySum = 0;
  parseInt(arraySum);

  var array = document.getElementById('array');
  array = array.value.split(' ');

  // Validacija unosa
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== ' ' && isNaN(array[i])) {
      document.getElementById('output').innerHTML =
        'Unos mora sadržavati samo brojeve odvojene razmakom!';
      document.getElementById('output').classList.add('bad');
      document.getElementById('output').classList.remove('good');
      return;
    }
  }

  for (let i = 0; i < array.length; i++) {
    arraySum += parseInt(array[i]);
  }
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (currentSum * 2 + parseInt(array[i]) == arraySum) {
      document.getElementById('output').classList.remove('bad');
      document.getElementById('output').classList.add('good');
      document.getElementById('output').innerHTML = 'Rjesenje je: ' + i;
      return;
    } else if (i == array.length) {
      document.getElementById('output').innerHTML = 'nema rjesenja';
    } else currentSum += parseInt(array[i]);
  }
}
