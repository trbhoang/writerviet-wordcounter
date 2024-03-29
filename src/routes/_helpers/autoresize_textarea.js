function resize({ target }) {
	target.style.height = (+target.scrollHeight) + "px";
}

export function textarea_resize(el) {
	resize({ target: el });
	el.style.overflow = 'hidden';
	el.addEventListener('input', resize);

	return {
		destroy: () => el.removeEventListener('input', resize)
	}
}
