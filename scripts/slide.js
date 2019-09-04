class Slide {
	constructor($el, index) {
		this.$el = $el;
		this.index = index;
		this.title = this.$el.querySelector('h2').innerText;
		this.$el.addEventListener('click', () => {
			console.log(`Hello from #${this.index}, I'm talking about: '${this.title}'.`);
			const evt = new Event('next', {"bubbles":true, "cancelable":false});
			this.$el.dispatchEvent(evt);
		})
	}
}

