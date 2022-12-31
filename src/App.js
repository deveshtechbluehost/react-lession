import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Header favcol="pink" />
    </div>
  );
}

class Header extends React.Component {
  //mounting
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    // return { favoritecolor: props.favcol };
  }

  componentDidMount() {
    console.log('componentDidMount');
    // setTimeout(() => {
    //   this.setState({ favoritecolor: 'yellow' });
    // }, 1000);
  }

  //unmounting
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState);
    console.log('Old State :', this.state.favoritecolor);
    if (
      this.props.favoritecolor === nextProps &&
      this.state.favoritecolor === nextState
    ) {
      // Nothing has changed, so a re-render is unnecessary
      return false;
    }
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  //   // document.getElementById('div1').innerHTML =
  //   //   'Before the update, the favorite was ' + prevState.favoritecolor;
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // document.getElementById('div2').innerHTML =
    //   'The updated favorite is ' + this.state.favoritecolor;
  }

  submitHandler = () => {
    console.log('submitHandler');
    this.setState({ favoritecolor: 'red' });
  };

  render() {
    console.log('render');
    return (
      <>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <img src="/images/img.jpg" />
        <button onClick={this.submitHandler}>Submit</button>
        <div></div>
      </>
    );
  }
}
