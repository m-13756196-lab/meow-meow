input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
})
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
