Börja med att installera en ny create-react-app:

npx create-react-app my-app

npx är ett sätt att exekvera npm-binärer

--- --- --- --- --- ---

Starta projektet:

cd my-app

npm run start

--- --- --- --- --- ---

Vi kan rensa bort filer vi inte behöver:

src/App.test.js
src/App.css
setupTests.js

--- --- --- --- --- ---

Vi skriver om App.js från början:

export default class App extends Component {
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

--- --- --- --- --- ---

Skapa ett state:

  state = {
    name: ''
  }

Vi ändrar så att vi renderar en input:

    return (
      <>
        <input value={this.state.name} />
      </>
    );

--- --- --- --- --- ---

Vi skapar en "controlled form" genom att binda onChange till en state change:

  onNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  <input value={this.state.name} onChange={this.onNameChange} />

--- --- --- --- --- ---

Vi gör en conditional render om namnets längd är längre än tre tecken:

        { this.state.name.length >= 3 &&
          <h1>Welcome: {this.state.name}</h1>
        }

--- --- --- --- --- ---

Vi startar en timer när vi mountar:

  componentDidMount() {
    setInterval(() => {
      this.setState({
        elapsed: this.state.elapsed + 1
      })
    }, 1000)
  }

  state = {
    name: '',
    elapsed: 0
  }

  <p>Elapsed: {this.state.elapsed}</p>

--- --- --- --- --- ---

Glöm inte att rensa på willUnmount

  this.timerId = setInterval(() => {

  componentWillUnmount() {
    clearInterval(this.timerId)
  }
