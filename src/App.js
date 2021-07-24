import React, { Component } from 'react';
import Counter from './counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import EventPractice3 from './EventPractice3';
import EventPractice4 from './EventPractice4';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        {/* <Counter />
      <Say />
      <EventPractice />
      <EventPractice2 />
      <EventPractice3 />
      <EventPractice4 />
      <ValidationSample /> */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
