import React from "react";
import { connect } from "react-redux";
import Tweets from "./Tweets";
const Dashboard = ({ tweetIds }) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>
            <Tweets id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
};
export default connect(mapStateToProps)(Dashboard);
