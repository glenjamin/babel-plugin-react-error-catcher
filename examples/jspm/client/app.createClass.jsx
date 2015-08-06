import React from 'react';

const App = React.createClass({
  getDefaultProps: function () {
    return { limit: 1 };
  },
  
  getInitialState: function () {
    return { clicks: 0 };
  },

  handleClick: function () {
    const limit = this.props.limit;
    const clicks = this.state.clicks + 1;

    if (clicks > limit) {
      throw new Error('Limit is '+limit+'!');
    } else {
      this.setState({clicks: clicks});
    }
  },

  render: function () {
    //const limit = this.props.limit;

    //if (this.state.clicks > limit) {
    //  throw new Error('Limit is '+limit+'!');
    //}

    return (
      <div style={style} onClick={this.handleClick}>
        {'Clicks: '+this.state.clicks}
      </div>
    );
  }
});

export default App;

export const style = {
  position: 'fixed',
  top: '0',
  right: '0',
  width: '200px',
  height: '200px',
  paddingTop: '20px',
  paddingBottom: '20px',
  background: '#aaaaff',
  color: '#000000',
  textAlign: 'center',
  zIndex: 9999
};

export function mount (element) {
  React.render(<App/>, element);
}
