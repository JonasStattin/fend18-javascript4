import React from 'react';

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('Constructor');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { children, closeModal } = this.props;

    return (
      <div>
        <header>
          <button onClick={closeModal}>X</button>
        </header>
        { children }
      </div>
    );
  }
}

export default ModalWindow;
