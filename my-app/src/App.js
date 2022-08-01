import { throwStatement } from '@babel/types';
import React, { useState } from 'react';
import { Form } from './Form/Form';
import './App.css';
// import lib 

const fakeServer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

class L extends React.Component {

  constructor(props) {
    console.log('constructor 1 ')
    super(props)
    this.state = { first: 1 }
  }

  componentDidMount() {
    // async запросы на сервер 

    console.log('componentDidMount 3')
    // fakeServer
    //   .then(data => this.setState({ first: data }))
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, 'nextProps')
  //   console.log(nextState, 'nextState')
  //   console.log(this.props, 'props')

  //   // if (this.state.first === 3) return true
  //   if (nextProps.test === 2) {
  //     this.setState({ first: 2 })
  //   }


  // }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render 2')
    return (
      <div>
        {this.state.first}
        {this.props.test}
        <button onClick={() => this.setState({ first: this.state.first + 1 })}>CLICK</button>
      </div>
    )
  }
}


function App() {
  const [state, setState] = useState(1)
  return (
    <div className="App">
      {/* <L test={state} /> */}
      {/* монтирован в дом дерево  */}
      <Form />
    </div>
  );
}



export default App;
