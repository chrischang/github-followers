import React from 'react';

import './FollowerList.css';

/**
avatar_url: "https://avatars0.githubusercontent.com/u/16298804?v=4"
events_url: "https://api.github.com/users/krpeacock/events{/privacy}"
followers_url: "https://api.github.com/users/krpeacock/followers"
following_url: "https://api.github.com/users/krpeacock/following{/other_user}"
gists_url: "https://api.github.com/users/krpeacock/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/krpeacock"
id: 16298804
login: "krpeacock"
node_id: "MDQ6VXNlcjE2Mjk4ODA0"
organizations_url: "https://api.github.com/users/krpeacock/orgs"
received_events_url: "https://api.github.com/users/krpeacock/received_events"
repos_url: "https://api.github.com/users/krpeacock/repos"
site_admin: false
starred_url: "https://api.github.com/users/krpeacock/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/krpeacock/subscriptions"
type: "User"
url: "https://api.github.com/users/krpeacock"
 */

const FollowerList = ({ followers }) => {
  if (!followers.length) {
    return 'Please Specify a username';
  }
  // login
  // avatar_url
  const mapFollowers = followers.map((follower) => {
    return (
      <div key={follower.id} className="follower-container">
        <div className="margin-right">
          <img
            src={follower.avatar_url}
            alt={`${follower.login} avatar`}
            width="50"
            height="50"
          />
        </div>
        <div>
          <h2>{follower.login}</h2>
        </div>
      </div>
    );
  });
  return mapFollowers;
};

export default FollowerList;
