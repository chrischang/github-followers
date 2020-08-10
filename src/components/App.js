import React, { Component } from 'react';

import FollowerList from './FollowerList';
import github from '../apis/github';

class App extends Component {
  state = {
    followerUsername: '',
    followers: [],
    pageId: 1,
  };

  // componentDidMount() {
  //   github
  //     .get('/users/chrischang/followers')
  //     .then((response) => console.log(response));
  // }

  onSubmitClick = (e) => {
    const { followerUsername, pageId } = this.state;
    e.preventDefault();
    github
      .get(`/users/${followerUsername}/followers?page=${pageId}`)
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      });
  };

  onNextClick = (e) => {
    this.setState(
      {
        pageId: this.state.pageId + 1,
      },
      () => {
        this.onSubmitClick(e);
      }
    );
  };

  onBackClick = (e) => {
    this.setState(
      {
        pageId: this.state.pageId - 1,
      },
      () => {
        this.onSubmitClick(e);
      }
    );
  };

  renderPaginationButtons = () => {
    const { pageId, followers } = this.state;
    if (pageId === 1) {
      return <button onClick={this.onNextClick}>Next</button>;
    } else if (pageId > 1 && followers === 30) {
      return (
        <div>
          <button onClick={this.onBackClick}>Prev</button>
          <button onClick={this.onNextClick}>Next</button>
        </div>
      );
    } else {
      return <button onClick={this.onBackClick}>Prev</button>;
    }
  };

  // {/* if page 1, there won't be a previous button */}
  //   {/* if page > 1 and has 30 followers, then next button */}
  //   {/* if page > 1 and has less than 30 followers, then only previous button */}

  render() {
    const { followers, followerUsername, pageId } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="followers"></label>
          <input
            id="followers"
            type="text"
            value={followerUsername}
            onChange={(e) =>
              this.setState({ followerUsername: e.target.value })
            }
          />
          <button onClick={this.onSubmitClick}>Find Followers</button>
        </div>
        <div>
          <FollowerList followers={followers} />
        </div>
        {this.renderPaginationButtons()}
      </div>
    );
  }
}

export default App;
