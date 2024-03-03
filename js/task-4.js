const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailUser = event.currentTarget.elements.email.value.trim();
  const passwordUser = event.currentTarget.elements.password.value.trim();

  if (emailUser === '' || passwordUser === '') {
    alert('All form fields must be filled in');
  } else {
    const infoUser = { email: emailUser, password: passwordUser };
    console.log(infoUser);
    event.currentTarget.reset();
  }
}
