import * as React from 'react';

function SvgMailbox2(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M9 8.5h2.793l.853.854A.5.5 0 0013 9.5h1a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H9v1z' />
			<path d='M12 3H4a4 4 0 00-4 4v6a1 1 0 001 1h14a1 1 0 001-1V7a4 4 0 00-4-4zM8 7a3.99 3.99 0 00-1.354-3H12a3 3 0 013 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 012 0c0 .334-.164.264-.415.157z' />
		</svg>
	);
}

export default SvgMailbox2;
