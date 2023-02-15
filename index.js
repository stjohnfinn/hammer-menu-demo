function main() {
    
    // on left click create element, insert, and move to mouse position
    let body = document.querySelector('body')

    let menu = document.createElement('div')
    menu.classList.add('hammer-menu')

    let menuMousePos = {
        start: {
            x: 0,
            y: 0
        },
        end: {
            x: 0,
            y: 0
        }
    }

    body.addEventListener('contextmenu', (e) => {
        e.preventDefault()

        menu.style.top = `${e.clientY}px`
        menu.style.left = `${e.clientX}px`

        body.appendChild(menu)

        // store starting mouse position

        menuMousePos.start.x = e.clientX
        menuMousePos.start.y = e.clientY

        // draw line from starting postion to current position
        // this will be a bool isMenuOpen and when it's true, onMouseMove, a
        // line will be drawn from starting coords to current
        // im goated
    })

    body.addEventListener('mouseup', () => {
        menu.remove()
    })

}