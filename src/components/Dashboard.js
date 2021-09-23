import React from "react";
import { connect } from "react-redux";
const Dashboard = ({ tweetIds }) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweetIds.map((id) => (
          <li key={id}>TWEET ID: {id}</li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ tweets: { tweets } }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
};
export default connect(mapStateToProps)(Dashboard);
