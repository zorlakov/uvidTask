// SAV KOMENTIRANI KOD JE DOBAR SAMO NEZ STO NE VALJA OVO OKIDANJE NE RETURNA NA VAKAT IDK

// NA POCETAK DODATI DA SE INNERHTML ONOM SRANJU STAVI NA "", I AKO NE RADI GOOD/BAD DA SE I TO NA PRAZNO STAVI

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

      console.log('doso ovdje treba biti kraj');
      return;
    }
  }

  for (let i = 0; i < array.length; i++) {
    arraySum += parseInt(array[i]);
  }
  console.log('eo full sume  ', arraySum);
  let currentSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (currentSum * 2 + parseInt(array[i]) == arraySum) {
      document.getElementById('output').classList.remove('bad');
      document.getElementById('output').classList.add('good');
      document.getElementById('output').innerHTML = 'Rjesenje je: ' + i;
      console.log(i);
      return;
    } else if (i == array.length) {
      document.getElementById('output').innerHTML = 'nema rjesenja';
    } else currentSum += parseInt(array[i]);
  }
}
