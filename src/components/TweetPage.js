import React from "react";
import { connect } from "react-redux";
import Tweets from "./Tweets";
import NewTweet from "./NewTweet";
const TweetPage = (props) => {
  const { id } = props.match.params;
  const { replies } = props;
  return (
    <div>
      <Tweets id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map((replyId) => {
          return (
            <li key={replyId}>
              <Tweets id={replyId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ tweets, users, authedUser }, props) => {
  const { id } = props.match.params;
  console.log(tweets[id]);
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  };
};
export default connect(mapStateToProps)(TweetPage);
