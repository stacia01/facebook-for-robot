import React from 'react';

const Scrolls = (props) => {
	return(
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '459px'}}>
			{props.children}
		</div>
	)
}

export default Scrolls;