import * as React from 'react';

const style: any = {
	fill: 'none',
	stroke: '#000',
	strokeLinecap: 'round',
	strokeLinejoin: 'join'
}

export const RemoveIcon = () => <svg style={{
	maxWidth: 32,
	maxHeight: 32,
}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<line style={style} x1="0.5" y1="6.507" x2="23.5" y2="6.507" />
	<path style={style} d="M20.5,6.5v15a2,2,0,0,1-2,2H5.5a2,2,0,0,1-2-2V6.5" />
	<path style={style} d="M2.5,6.5v-1a2,2,0,0,1,2-2h15a2,2,0,0,1,2,2v1" />
	<path style={style} d="M9,3.5a3,3,0,0,1,6,0" />
	<line style={style} x1="12" y1="10" x2="12" y2="19.5" />
	<line style={style} x1="16.5" y1="10" x2="16.5" y2="19.5" />
	<line style={style} x1="7.5" y1="10" x2="7.5" y2="19.5" />
</svg>