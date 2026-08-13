input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 40)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
