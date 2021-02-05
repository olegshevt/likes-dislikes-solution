import React from "react";
const likes = 100;
const dislikes = 25;
const buttonStyles = {
  color: "blue"
};
const btnDefault = {};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.likeCounterHandler = this.likeCounterHandler.bind(this);
    this.dislikeCounterHandler = this.dislikeCounterHandler.bind(this);

    this.state = {
      likeItem: likes,
      dislikeItem: dislikes
    };
  }

  likeCounterHandler() {
    if (this.state.likeItem === likes) {
      this.setState(state => ({
        likeItem: state.likeItem + 1,
        dislikeItem: dislikes
      }));
    }
  }

  dislikeCounterHandler() {
    if (this.state.dislikeItem === dislikes) {
      this.setState(state => ({
        dislikeItem: state.dislikeItem + 1,
        likeItem: likes
      }));
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.headerProp}</div>
        <div>
          <span>
            <button
              style={this.state.likeItem !== likes ? buttonStyles : btnDefault}
              onClick={this.likeCounterHandler}
            >
              Like
            </button>
             | {this.state.likeItem}
          </span>

          <span>
            <button
              style={
                this.state.dislikeItem !== dislikes ? buttonStyles : btnDefault
              }
              onClick={this.dislikeCounterHandler}
            >
              Dislike
            </button>
             | {this.state.dislikeItem}
          </span>
        </div>
      </div>
    );
  }
}

export default App;