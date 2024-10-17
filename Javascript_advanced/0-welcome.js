function welcome(firstName, lastName) {
  let fullName = String(firstName) + " " + String(lastName);

    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}
