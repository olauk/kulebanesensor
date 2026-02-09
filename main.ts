let terskel = 900
let frekvens = 5
let kule_aktiv = false
loops.everyInterval(frekvens, function () {
    if (pins.analogReadPin(AnalogPin.P0) < terskel) {
        if (!(kule_aktiv)) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
            kule_aktiv = true
        }
    } else {
        kule_aktiv = false
    }
})
basic.forever(function () {
	
})
