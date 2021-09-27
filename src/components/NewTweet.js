import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState({ message: "" });
  const [isHome, setIsHome] = useState({ toHome: false });

  const handleChange = (e) => {
    setText({
      message: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(text.message, id));
    setIsHome({
      toHome: id ? isHome.toHome : !isHome.toHome
    });
    setText({
      message: ""
    });
  };

  const tweetLeft = 280 - text.message.length;
  return isHome.toHome === true ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's is happening"
          value={text.message}
          onChange={handleChange}
          className="text-area"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text.message === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default connect()(NewTweet);
