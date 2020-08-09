radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(73)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("Hello")
    basic.pause(2000)
})
