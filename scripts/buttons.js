class Buttons {
	template = `
<style>
	.buttons-component button {
		width: 200px;
	}
</style>
<div class="btn-group">
	<button class="prev">Prev</button>
	<button class="next">Next</button>
</div>
	`;

	constructor(parent) {
		this.$el = parent;
		this.contents = new DOMParser().parseFromString(this.template, 'text/html');
		this.$el.appendChild(document.createRange().createContextualFragment(this.contents.documentElement.innerHTML));

		this.$next = this.$el.querySelector('.next');
		this.$next.classList.add('btn', 'btn-primary');
		this.$next.addEventListener('click', this.next.bind(this));

		this.$prev = this.$el.querySelector('.prev');
		this.$prev.classList.add('btn', 'btn-primary');
		this.$prev.addEventListener('click', this.prev.bind(this));


		this.$el.addEventListener('slideUpdate', (event) => {
			this.updateButtons(event);
		})
	}

	updateButtons(event) {
		console.log(event.detail);
		if (event.detail.next) {
			this.$next.removeAttribute('disabled');
		} else {
			this.$next.setAttribute('disabled', 'disabled');
		}
		if (event.detail.prev) {
			this.$prev.removeAttribute('disabled');
		} else {
			this.$prev.setAttribute('disabled', 'disabled');
		}
	}

	next() {
		const evt = new Event('next', {"bubbles": true, "cancelable": false});
		this.$el.dispatchEvent(evt);
	}

	prev() {
		const evt = new Event('prev', {"bubbles": true, "cancelable": false});
		this.$el.dispatchEvent(evt);
	}

}
