import React, { Component } from "react";

class Twitt extends React.Component{
  render(){
    let {name , text, date, id} = this.props.twitt;
    return (
      <li className = "twittItem" key={id}>
        <p className = "name">{name}</p>
        <p className = "date">{date}</p>
        <p className = "text">{text}</p>
      </li>
    )
  }
}
export default Twitt; //export객체에 담아 전달 














// import React from "react";

// function SingleTweet({ writer, date, children }) {
//   return (
//     <li className="tweet">
//       <div className="writer">{writer}</div>
//       <div className="date">{date}</div>
//       <div>{children}</div>
//     </li>
//   );
// }

// export default SingleTweet;