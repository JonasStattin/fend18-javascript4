'use strict';

class ControlledForm extends React.Component {
  constructor(props) {
    // This is called before mounting
    // This is used to set initial state, and to bind functions
    
    // You must call the super method with props as an argument, or they will not be available
    // WARNING! It's an anti pattern to copy props into state, avoid this since state will
    // not always reflect props, and it's just unnecessary
    super(props);

    this.state = {
      date: new Date(),
      name: '',
      isSubmitting: false
    };

    // Make "this" available in custom methods
    // You can skip this by using arrow declarations for functions, which is
    // currently the preferred method, but see this article and the comments for discussion on this
    // https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
    this.tick = this.tick.bind(this);
    this.onFormNameChange = this.onFormNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // This is a good place to do inital network requests or to setup subscriptions
    // Remember to remove subscriptions in componentWillUnmount
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Use this to check if an update is even needed
    // Compare the coming changes in props or state to skip renders that are not needed
    console.log('shouldComponentUpdate');
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    // Use this to update state based on props
    // Triggers on all rerenderings of component
    console.log('getDerivedStateFromProps');
    if (props.valid) {
      // Use ...-syntax for flexible state changes
      return {
        ...state,
        isSubmitting: false
      };
    }

    return state;
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  onFormNameChange(evt) {
    // Update the state to reflect changes in the input field
    this.setState({ name: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();

    this.setState({
      isSubmitting: true
    });

    this.props.onSubmit({
      name: this.state.name
    });
  }

  render() {
    // This is were the rendering takes place, and is the only required method
    // Never modify anything like state here, just describe what should be rendered
    console.log('render');
    return (
      <form>
        <p>Hej! Klockan är: { this.state.date.toLocaleTimeString() }</p>
        <input type="text" value={this.state.name} onChange={this.onFormNameChange} />
        <button onClick={this.onSubmit}>Skicka</button>
        { !this.props.valid &&
          <p>Formuläret är inte ok, skicka korrekt namn</p>
        }
        { this.state.isSubmitting &&
          <p>Skickar...</p>
        }
      </form>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // Check for changes in props and state to do things like network requests or animations
    if (!prevProps.valid && this.props.valid) {
      alert('Du har skickat din data!');
    }
    if (prevState.date !== this.state.date) {
      document.title = `React Example @ ${this.state.date.toLocaleTimeString()}`;
    }
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // This happens right before a component gets removed
    // Remove any subscriptions or cancel network requests here
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }
}

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ valid: false, showForm: true });
  }

  // Fat arrow functions have the correct scope, but see discussion above
  onFormSubmit = (formData) => {
    // Fake a submit and validation
    setTimeout(() => {
      this.setState({ valid: true });
    }, 1000);
  }

  // Fat arrow functions have the correct scope, but see discussion above
  removeForm = () => {
    this.setState({ showForm: false })
  }

  render() {
    return (
      <React.Fragment>
        { this.state.showForm && 
          <ControlledForm
            valid={this.state.valid}
            onSubmit={this.onFormSubmit}
          /> 
        }
        <button onClick={this.removeForm}>Remove form</button>
      </React.Fragment>
    );
  }
}

// Attach the React app to the DOM
const domContainer = document.querySelector('#root');
ReactDOM.render(<FormContainer />, domContainer);