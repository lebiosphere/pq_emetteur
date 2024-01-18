radio.setGroup(43)
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P0) > 4) {
        radio.sendNumber(3)
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(200)
})
