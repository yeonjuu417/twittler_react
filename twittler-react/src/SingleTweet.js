function SingleTweet(props) {
    return (
      <li>
        <div>{props.name}</div>
        <div>{props.date}</div>
        <div>{props.text}</div>
      </li>
    );
  }

export default SingleTweet;