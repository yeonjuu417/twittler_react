import React from 'react';
import './Twittler.css';

import TwittForm from './twittForm';
import TwittList from './twittList';

class Twittler extends React.Component {
   constructor() {
    super();
    this.currentId = 1;
  }
  state = {
    twittGroup: [
      { name: '테스트', text: '예시', date: '2020-10-05 10시 5분 2초', id: 0 },
    ],
  };

  submitHandler = (twitt) => {
    if (twitt.text) {
      this.setState(
        {
          ...this.state,
          twittGroup: [
            ...this.state.twittGroup,
            { ...twitt, id: this.currentId },
          ],
        },
        () => {
          console.log(this.state);
        }
      );
      this.currentId++;
    } else {
      alert('내용을 입력해주세요');
    }
  };
  render(){
    return (
        <div className="container">
            <TwittForm submitHandler={this.submitHandler}/>
            <TwittList twittGroup={this.state.twittGroup}/>
        </div>
    )
  }
}

export default Twittler;













