input.onButtonPressed(Button.A, function () {
    adresse = Math.min(1, adresse - 1)
})
input.onButtonPressed(Button.B, function () {
    adresse = Math.max(25, adresse + 1)
})
let adresse = 0
radio.setGroup(43)
adresse = 1
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P0) > 4) {
        radio.sendNumber(3)
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showString("" + (adresse))
    }
    basic.pause(200)
})
