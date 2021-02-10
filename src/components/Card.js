import React from 'react';

const Card = ({name, email, id}) => {
  	return (
	  	<div className="bg-light-green dib br3 mw5 pa3 ma2 grow bw2 shadow-3">
				<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
				<h2 className="f5 mb2">{name}</h2>
		    <h3 className="f6 fw4 grey mt0">{email}</h3>			 
			</div>
  	);
}

export default Card;