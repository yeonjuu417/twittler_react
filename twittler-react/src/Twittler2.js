import React from 'react';
import SingleTweet from './SingleTweet'

class Twittler2 extends React.Component {
  // constructor(props) {
  //   super(props);
    state = {
      name : "이름작성해",
      text: "댓글내용입력해",
      tweets: [
        {
          uuid: 1,
          name: "연주곤듀",
          date: "2020-11-18",
          text: "리엑트 화나게 하지마라"
        },
      ]//[{},{},{},{},{},{}] 이런식으로 계속 twitts에 추가됨 그래서 맨뒤에 ,를 해준거 
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // 화살표 함수 쓰면 이딴 작업 불필요
  }

  handleChangeText = (e) => {//이벤트타겟이 되는 value값 교환
    this.setState({ text: e.target.value });
  }
  handleChangeName = (e) => {//이벤트타겟이 되는 value값 교환
    this.setState({ name: e.target.value });
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    const { name, text, tweets } = this.state;
      this.setState({//상태를 바꾸는 문법 
        tweets: tweets.concat({
          uuid: tweets.length,
          name: name,
          date: new Date().toLocaleString(),
          text: text
        })
      }) 
      
  }

  render() {
    return (
      <div id="root">
        <div>
          <textarea value={this.state.value} onChange={this.handleChangeName}/>
          <div id="writing-area">
            <textarea  value={this.state.value} onChange={this.handleChangeText}></textarea>
            <button  onClick={this.handleSubmit}>새 글 쓰기</button>
          </div>
          <ul id="tweets">
            {this.state.tweets.map((item, index) => (
              <SingleTweet
                key={index}
                name={item.name}
                date={item.date}
                text={item.text}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Twittler2;
