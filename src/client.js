import * as sapper from '@sapper/app';
import cursorDot from 'cursor-dot';

sapper.start({
	target: document.querySelector('#sapper')
});

const cursor = cursorDot({
	diameter: 8,
	easing: 4,
	background: '#EBE8E0'
})

cursor.over('a, button', 'div.hoverable', '.clickable', {
	scale: 4
})