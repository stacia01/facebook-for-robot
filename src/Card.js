import React from 'react';

const Card = ({name, email, id}) => {
  	return (
	  	<div class="bg-light-green dib br3 mw5 pa3 ma2 grow bw2 shadow">
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<h1 class="f5 mb2">{name}</h1>
		    <h2 class="f5 fw4 grey mt0">{email}</h2>			 
		</div>
  	);
}

export default Card;