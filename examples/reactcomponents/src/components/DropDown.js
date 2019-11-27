import React from 'react';

class DropDown extends React.Component {
  state = {
    expanded: false
  }

  onToggleExpand = (evt) => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { items } = this.props;
    const { expanded } = this.state;

    return (
      <React.Fragment>
        <button onClick={this.onToggleExpand}>Expand</button>
        { expanded &&
          <ul>
            { items.map((item, i) => {
                return <li key={item.substr(0, 3) + i}>{item}</li>;
              }) }
          </ul>
        }
      </React.Fragment>
    );
  }
}

export default DropDown;