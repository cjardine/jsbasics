class Application {
	slides = {
		current: 0,
		next: false,
		prev: false,
	};

	constructor() {
		this.$el = document.body;

		this.$slides = this.$el.querySelectorAll('.card');
		this.slideInstances = [];

		this.$buttons = this.$el.querySelector('.buttons-component');
		this.buttonsInstance = new Buttons(this.$buttons);

		this.$slides.forEach((slide, index, array) => {
			this.slideInstances.push(new Slide(slide, index));
		});

		this.$el.addEventListener('next', () => {
			this.showSlide(this.slides.current + 1)
		});
		this.$el.addEventListener('prev', () => {
			this.showSlide(this.slides.current - 1)
		});
		this.showSlide(0);
	}

	showSlide(slideNumber) {
		this.$slides.forEach((slide, index, array) => {
			if (slideNumber >= 0 && slideNumber < this.$slides.length) {
				this.slides.current = slideNumber;
				if (index === this.slides.current) {
					slide.classList.add('active');
				} else {
					slide.classList.remove('active');
				}
				this.slides.next = (slideNumber < this.$slides.length - 1);
				this.slides.prev = (slideNumber > 0);

			}
		});
		const evt = new CustomEvent('slideUpdate', {detail: this.slides});
		this.$buttons.dispatchEvent(evt);
	}

}
