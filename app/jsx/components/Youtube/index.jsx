import Player from "../Player";
import { connect } from "react-redux";
import { play } from "../../actions";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let videoId = this.props.id || "7_Nj6Z_uMQc";
    return (
      <div className="cinema">
        <Player
          url={`https://www.youtube.com/watch?v=${videoId}`}
          height="760px"
          partyId={this.props.partyId}
        />
      </div>
    );
  }
}

export default connect(null, null)(Youtube);
