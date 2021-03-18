import { Controller } from "stimulus"

export default class extends Controller {
    static values = { opened: Boolean }
    static targets = ['navmenu', 'toggleButton']
    static classes = ['open', 'body_open']

    initialize() {
        //this.navmenuTarget.hidden = false
    }

    openedValueChanged() {
        console.log(this.openedValue)
        console.log(this.body_openClass)
        if(this.openedValue) {
            this.navmenuTarget.classList.add(this.openClass)
            document.body.classList.add(this.body_openClass)
        } else {
            this.navmenuTarget.classList.remove(this.openClass)
            document.body.classList.remove(this.body_openClass)
        }
        this.toggleButtonTarget.hidden = !this.openedValue
    }

    toggleOpen(event) {
        this.openedValue = !this.openedValue
        event.stopPropagation()
        const closeClickHandler = (event) => {
            this.openedValue = !this.openedValue
            document.removeEventListener('click', closeClickHandler)
    
        }
        document.addEventListener('click', closeClickHandler)
    }

    
}