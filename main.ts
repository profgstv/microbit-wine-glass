basic.showString("v")
basic.showString("i")
basic.showString("n")
basic.showString("h")
basic.showString("o")
basic.showString("?")
let copo = 3
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        if (copo > 0 && copo <= 3) {
            copo += 0 - 1
        }
        if (copo == 3) {
            basic.showLeds(`
                # # # . #
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 2) {
            basic.showLeds(`
                # # . . #
                # # # . #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 1) {
            basic.showLeds(`
                # . . . #
                # # . . #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . # .
                . . # . .
                . # # # .
                `)
        }
    } else if (input.isGesture(Gesture.TiltRight)) {
        if (copo > 0 && copo <= 3) {
            copo += 0 - 1
        }
        if (copo == 3) {
            basic.showLeds(`
                # . # # #
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 2) {
            basic.showLeds(`
                # . . # #
                # . # # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 1) {
            basic.showLeds(`
                # . . . #
                # . . # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . # .
                . . # . .
                . # # # .
                `)
        }
    } else {
        if (copo >= 0 && copo <= 3) {
            if ((input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)) && copo < 3) {
                copo += 1
            }
        }
        if (copo == 3) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 2) {
            basic.showLeds(`
                # . . . #
                # # # # #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else if (copo == 1) {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # # # .
                . . # . .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                # . . . #
                . # . # .
                . . # . .
                . # # # .
                `)
        }
    }
})
