class Switch {
    constructor(element) {
        this.state = false;
        this.element = element;
        this.element.addEventListener('click', () => this.handleOnClick())
    }

    set State(value) {
        this.state = value;
        this.element.setAttribute('aria-checked', this.state)
        this.element.classList.toggle('open', this.state);
    }

    toggle() {
        this.State = !this.state;
    }

    turnOn() {
        this.State = true;
    }

    turnOff() {
        this.State = false;
    }

    handleOnClick(e) {
        this.toggle();
    }
}

const switchThumbs = document.querySelectorAll('.switch>.thumb')
for (const switchThumb of switchThumbs) {
    const switchElement = new Switch(switchThumb)
}