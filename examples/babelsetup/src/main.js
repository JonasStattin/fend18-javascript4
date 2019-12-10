const fn = () => 1;

const person = {
  name: 'John Smith',
  title: 'Developer'
}

const address = {
  street: '123 Fakestreet',
  city: 'Nowhere'
}

const contactInfo = {
  ...person,
  ...address
}