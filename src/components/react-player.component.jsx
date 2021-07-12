import React from "react";
import ReactPlayer from "react-player/lazy";

import Thumbnail from "../imgs/tca-rahim-thumbnail.jpg";
function VideoPlayer() {
	return (
		<div className="player-wrapper">
			<ReactPlayer
				className="react-player"
				url="https://www.youtube.com/watch?v=2I-RMpMod0U"
				light={Thumbnail}
				controls={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
}

export default VideoPlayer;
