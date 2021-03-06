import * as React from 'react';

function SvgFiles(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M13 0H6a2 2 0 00-2 2 2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2 2 2 0 002-2V2a2 2 0 00-2-2zm0 13V4a2 2 0 00-2-2H5a1 1 0 011-1h7a1 1 0 011 1v10a1 1 0 01-1 1zM3 4a1 1 0 011-1h7a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4z' />
		</svg>
	);
}

export default SvgFiles;
