import React, { Component } from 'react';

class counter extends Component {
  constructor(props) {
    super(props);
    //state의 초기값 설정하기
    this.state = {
      number: 0,
      fixeNumber: 0,
    };
  }
  render() {
    const { number, fixeNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixeNumber}</h2>
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default counter;
