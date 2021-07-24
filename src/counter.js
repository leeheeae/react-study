import React, { Component } from 'react';

class counter extends Component {
  state = {
    number: 0,
    fixeNumber: 0,
  };
  render() {
    const { number, fixeNumber } = this.state; //state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixeNumber}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default counter;
