import * as sapper from '@sapper/app';
import cursorDot from 'cursor-dot';

sapper.start({
	target: document.querySelector('#sapper')
});

const cursor = cursorDot({
	diameter: 24,
	easing: 4,
	background: '#fff',
	borderColor: '#fff',
	scale: 1
})

cursor.over('a, button', 'div.hoverable', '.clickable', {
	scale: 4
})
