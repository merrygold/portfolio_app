import * as React from 'react';

function SvgArrowClockwise(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M8 3a5 5 0 104.546 2.914.5.5 0 01.908-.417A6 6 0 118 2v1z'
			/>
			<path d='M8 4.466V.534a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 018 4.466z' />
		</svg>
	);
}

export default SvgArrowClockwise;
