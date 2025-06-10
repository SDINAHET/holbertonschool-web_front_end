const globalVariable = 'Welcome';

function outer() {
  alert(globalVariable);

  const course = 'Holberton';

  function inner() {
    alert(`${globalVariable} ${course}`);

    const exclamation = '!';

    function inception() {
      alert(`${globalVariable} ${course}${exclamation}`);
    }

    inception(); // Appel de inception dans inner
  }

  inner(); // Appel de inner dans outer
}

outer(); // Appel de outer dans le code principal
