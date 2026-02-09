terskel = 900
frekvens = 5
kule_aktiv = False

def on_every_interval():
    pass
loops.every_interval(frekvens, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
