input.onButtonPressed(Button.A, function () {
    adresse = Math.max(0, adresse - 1)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    adresse = Math.min(24, adresse + 1)
    basic.pause(500)
})
let adresse = 0
radio.setGroup(43)
adresse = 0
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P0) > 4) {
        radio.sendNumber(adresse)
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showString("" + (adresse + 1))
    }
    basic.pause(200)
})
