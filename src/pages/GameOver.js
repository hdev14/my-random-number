import React from 'react';

import '../styles/game-over.css';

// Components
import Button from '../components/Button';

const GameOver = ({ attempts }) => (
	<div id="game-over-page" className="screen">
		<div id="play-again">
			<p>Nice!</p>
			<Button to="/load" btnClass="btn btn-primary" textValue="PLAY AGAIN!" />
		</div>
		<p id="attempts"> 2 Attempts </p>
	</div>
);

export default GameOver;