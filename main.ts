let esquerda = 0
let Miranha = false
let pulo = 0
let Animation = 0
let HP = 0
let TomandoDano = 0
let Banana = 0
let mapa = 0
let timer2 = 0
let timer = 0
let Fase2 = 0
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbb3b99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let MudarMapa = 360
let Macaco = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
let macaco_2 = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Projectile)
let direita = 1
Macaco.setScale(1, ScaleAnchor.Middle)
controller.moveSprite(Macaco, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(Macaco, tiles.getTileLocation(1, 90))
scene.cameraFollowSprite(Macaco)
Macaco.ay = 300
game.onUpdate(function () {
    if (Fase2 == 1) {
        timer += -1
        timer2 += -1
    }
    if (timer2 <= -1) {
        tiles.setCurrentTilemap(tilemap`espinho2`)
        timer2 = 120
    }
    if (timer <= -1) {
        mapa = randint(1, 3)
        timer = MudarMapa
    }
    if (mapa == 1) {
        tiles.setCurrentTilemap(tilemap`level6`)
        timer2 = 40
    }
    if (mapa == 2) {
        tiles.setCurrentTilemap(tilemap`level7`)
    }
    if (mapa == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
    }
})
game.onUpdate(function () {
    macaco_2.sayText(timer)
    macaco_2.sayText(timer2)
    if (Banana >= 7) {
        game.setGameOverMessage(true, "Macaco Comeu Bananas :)")
        game.gameOver(true)
    }
    if (Macaco.tileKindAt(TileDirection.Center, assets.tile`myTile5`) && TomandoDano <= 0) {
        scene.cameraShake(2, 100)
        TomandoDano = 35
        HP += 1
    }
    if (Macaco.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        timer = MudarMapa
        Fase2 = 1
        tiles.setCurrentTilemap(tilemap`espinho2`)
        tiles.placeOnTile(Macaco, tiles.getTileLocation(5, 6))
        tiles.placeOnTile(macaco_2, tiles.getTileLocation(5, 6))
    }
    if (Macaco.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        game.setGameOverMessage(false, "Mamaco Odeia Água :(")
        game.gameOver(false)
    }
    if (Macaco.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        tiles.setTileAt(Macaco.tilemapLocation(), assets.tile`transparency16`)
        Banana += 1
    }
})
game.onUpdate(function () {
    if (TomandoDano > 0) {
        TomandoDano += -1
    }
})
game.onUpdate(function () {
    if (!(controller.left.isPressed() || controller.right.isPressed()) || Macaco.vx == 0) {
        Animation = 0
    }
    if (Animation >= 4) {
        Animation = 1
    }
})
forever(function () {
    if (Macaco.vy > 0) {
        pulo = 1
    }
    if (Macaco.vy == 0) {
        pulo = 0
    }
    if (Macaco.vy < 0) {
        pulo = -1
    }
    Miranha = Macaco.isHittingTile(CollisionDirection.Top)
})
forever(function () {
    if (controller.A.isPressed() && Macaco.vy == 0) {
        Macaco.vy = -145
    }
    if (controller.A.isPressed() && Macaco.isHittingTile(CollisionDirection.Top)) {
        Macaco.ay = 0
    } else {
        Macaco.ay = 300
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        esquerda = 1
        direita = 0
    }
    if (controller.right.isPressed()) {
        esquerda = 0
        direita = 1
    }
    if ((controller.left.isPressed() || controller.right.isPressed()) && Macaco.vx != 0) {
        Animation += 1
        pause(100)
    }
})
forever(function () {
    if (Miranha == false) {
        if (pulo == 1) {
            if (direita == 1) {
                Macaco.setImage(img`
                    . f f f f . . . . . . . . . . . 
                    f 7 7 7 7 f f . . . . . . . . . 
                    f 7 7 7 7 7 7 f f f f f . . . . 
                    f 7 7 7 7 7 7 7 5 e e e f . . . 
                    . f 7 7 7 7 7 5 e e d d d f . . 
                    . . f 7 7 7 5 e e d d d d d c . 
                    . . . f 7 5 e e d d d d d d c . 
                    . f f . f 5 e e d f d d f d d c 
                    f e f . . f e e d f d d f d d c 
                    f e f . . f e e d d d d e e d c 
                    f e f . . f f e e d c d d d f . 
                    f e f . f e e e e e d f f f . . 
                    . f f f e e e e e e e f . . . . 
                    . . f f b e e e e e f f . . . . 
                    . . f f d d c e e f f e f . . . 
                    . . . . f f f c d d b d d f . . 
                    . . . . . f f d d d c d d f . . 
                    . . . . . . f f f f f f f . . . 
                    `)
            }
            if (esquerda == 1) {
                Macaco.setImage(img`
                    . . . . . . . . . . . f f f f . 
                    . . . . . . . . . f f 7 7 7 7 f 
                    . . . . f f f f f 7 7 7 7 7 7 f 
                    . . . f e e 5 7 7 7 7 7 7 7 7 f 
                    . . f d d d e 5 7 7 7 7 7 7 f . 
                    . c d d d d d e 5 7 7 7 7 f . . 
                    . c d d d d d d e 5 7 7 f . . . 
                    c d d f d d f d e e 5 f . f f . 
                    c d d f d d f d e e f . . f e f 
                    c d e e d d d d e e f . . f e f 
                    . f d d d c d e e f f . . f e f 
                    . . f f f d e e e e e f . f e f 
                    . . . . f e e e e e e e f f f . 
                    . . . . f f e e e e e b f f . . 
                    . . . f e f f e e c d d f f . . 
                    . . f d d b d d c f f f . . . . 
                    . . f d d c d d d f f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `)
            }
        }
        if (pulo == -1) {
            if (direita == 1) {
                Macaco.setImage(img`
                    ..................
                    .......fffff......
                    .....ff777775f....
                    ...ff7777775eef...
                    ..f77777775ddddf..
                    .f77777775dfddfdc.
                    f77777775edfddfdc.
                    .f777775eeddddeedc
                    ..fff55beeddcddddc
                    .....cdbeeeddccccc
                    ...f..cffeeeddddf.
                    ..fef.feeeeffffff.
                    ..feffeeeeeeeffff.
                    ...ffeeeefefddfddf
                    ....feeeefefbdfbdf
                    ....feffffffffffff
                    ....fddcf.........
                    ....ffff..........
                    `)
            }
            if (esquerda == 1) {
                Macaco.setImage(img`
                    ..................
                    ......fffff.......
                    ....f577777ff.....
                    ...fee5777777ff...
                    ..fdddd57777777f..
                    .cdfddfd57777777f.
                    .cdfddfde57777777f
                    cdeeddddee577777f.
                    cddddcddeeb55fff..
                    cccccddeeebdc.....
                    .fddddeeeffc..f...
                    .ffffffeeeef.fef..
                    .ffffeeeeeeeffef..
                    fddfddfefeeeeff...
                    fdbfdbfefeeeef....
                    ffffffffffffef....
                    .........fcddf....
                    ..........ffff....
                    `)
            }
        }
        if (direita == 1 && pulo == 0) {
            if (Animation == 0) {
                Macaco.setImage(img`
                    .ffffff...........
                    .f77777ff.........
                    .f7777777ffff.....
                    .f777777755eef....
                    .f77777755ddddf...
                    .f7777755dfddfdc..
                    .fff7755edfddfdc..
                    ...ff55eeddddeedc.
                    .ff.f5beeddcddddc.
                    .fef.ffeedddccccc.
                    .fef..ffeedddddf..
                    .fef.feeeefffff...
                    .feffeeeeeeef.....
                    ..ffeeeefeffef....
                    ...feeeefeffef....
                    ....feffbdfbdf....
                    ....fdbbddcddf....
                    ....fffffffff.....
                    `)
            }
        }
        if (esquerda == 1 && pulo == 0) {
            if (Animation == 0) {
                Macaco.setImage(img`
                    ...........ffffff.
                    .........ff77777f.
                    .....ffff7777777f.
                    ....fee557777777f.
                    ...fdddd55777777f.
                    ..cdfddfd5577777f.
                    ..cdfddfde5577fff.
                    .cdeeddddee55ff...
                    .cddddcddeeb5f.ff.
                    .cccccdddeeff.fef.
                    ..fdddddeeff..fef.
                    ...fffffeeeef.fef.
                    .....feeeeeeeffef.
                    ....feffefeeeeff..
                    ....feffefeeeef...
                    ....fdbfdbffef....
                    ....fddcddbbdf....
                    .....fffffffff....
                    `)
            }
        }
        if (Macaco.vx != 0 && pulo == 0) {
            if (direita == 1) {
                if (Animation == 1) {
                    Macaco.setImage(img`
                        ..................
                        .......fffff......
                        .....ff777775f....
                        ...ff7777775eef...
                        ..f77777775ddddf..
                        .f77777775dfddfdc.
                        f77777775edfddfdc.
                        .f777775eeddddeedc
                        ..fff55beeddcddddc
                        .....cdbeeeddccccc
                        ...f..cffeeeddddf.
                        ..fef.feeeeffffff.
                        ..feffeeeeeeeffff.
                        ...ffeeeefefddfddf
                        ....feeeefefbdfbdf
                        ....feffffffffffff
                        ....fddcf.........
                        ....ffff..........
                        `)
                }
                if (Animation == 2) {
                    Macaco.setImage(img`
                        ..ffff............
                        .f7777fff.........
                        .f7777777ffff.....
                        .f777777775eef....
                        .ff7777775ddddf...
                        ..ff77775ddddddc..
                        ...ff775edfddfdc..
                        .ff.f75eedfddfddc.
                        .fef.ffeeddddeedc.
                        .fef..feeedcddddc.
                        .fef..ffeeedcccf..
                        .fef.feeeefffff...
                        ..fffeeeeeeef.....
                        ...feeeefeefeff...
                        ...feeefffeeffef..
                        ..fbffffffcddbddf.
                        ..fddcf..fdddcddf.
                        ...fff...fffffff..
                        `)
                }
                if (Animation == 3) {
                    Macaco.setImage(img`
                        ..ffffffff........
                        .f77777777f.......
                        f77777777775ff....
                        7f777777775eeef...
                        f.f7777775eedddf..
                        ...f77775eedddddc.
                        ....ff75eeddddddc.
                        ......f5eedfddfddc
                        ...f...feedfddfddc
                        ..fef..feeddddeedc
                        ..fef..ffeedcdddf.
                        ..fef.feeeeedfff..
                        ...fffeeeeeeef....
                        ....ffbeeeeeff....
                        ....ffddceeffef...
                        ......fffcddbddf..
                        .......ffdddcddf..
                        ........fffffff...
                        `)
                }
            }
            if (esquerda == 1) {
                if (Animation == 1) {
                    Macaco.setImage(img`
                        ..................
                        ......fffff.......
                        ....f577777ff.....
                        ...fee5777777ff...
                        ..fdddd57777777f..
                        .cdfddfd57777777f.
                        .cdfddfde57777777f
                        cdeeddddee577777f.
                        cddddcddeeb55fff..
                        cccccddeeebdc.....
                        .fddddeeeffc..f...
                        .ffffffeeeef.fef..
                        .ffffeeeeeeeffef..
                        fddfddfefeeeeff...
                        fdbfdbfefeeeef....
                        ffffffffffffef....
                        .........fcddf....
                        ..........ffff....
                        `)
                }
                if (Animation == 2) {
                    Macaco.setImage(img`
                        ............ffff..
                        .........fff7777f.
                        .....ffff7777777f.
                        ....fee577777777f.
                        ...fdddd5777777ff.
                        ..cdddddd57777ff..
                        ..cdfddfde577ff...
                        .cddfddfdee57f.ff.
                        .cdeeddddeeff.fef.
                        .cddddcdeeef..fef.
                        ..fcccdeeeff..fef.
                        ...fffffeeeef.fef.
                        .....feeeeeeefff..
                        ...ffefeefeeeef...
                        ..feffeefffeeef...
                        .fddbddcffffffbf..
                        .fddcdddf..fcddf..
                        ..fffffff...fff...
                        `)
                }
                if (Animation == 3) {
                    Macaco.setImage(img`
                        ........ffffffff..
                        .......f77777777f.
                        ....ff57777777777f
                        ...feee577777777f7
                        ..fdddee5777777f.f
                        .cdddddee57777f...
                        .cddddddee57ff....
                        cddfddfdee5f......
                        cddfddfdeef...f...
                        cdeeddddeef..fef..
                        .fdddcdeeff..fef..
                        ..fffdeeeeef.fef..
                        ....feeeeeeefff...
                        ....ffeeeeebff....
                        ...feffeecddff....
                        ..fddbddcfff......
                        ..fddcdddff.......
                        ...fffffff........
                        `)
                }
            }
        }
    }
})
forever(function () {
    if (Miranha == true) {
        if (direita == 1 && pulo == 0) {
            if (Animation == 0) {
                Macaco.setImage(img`
                    ....fffffffff.....
                    ....fdbbddcddf....
                    ....feffbdfbdf....
                    ...feeeefeffef....
                    ..ffeeeefeffef....
                    .feffeeeeeeef.....
                    .fef.feeeefffff...
                    .fef..ffeedddddf..
                    .fef.ffeedddccccc.
                    .ff.f5beeddcddddc.
                    ...ff55eeddddeedc.
                    .fff7755edfddfdc..
                    .f7777755dfddfdc..
                    .f77777755ddddf...
                    .f777777755eef....
                    .f7777777ffff.....
                    .f77777ff.........
                    .ffffff...........
                    `)
            }
        }
        if (esquerda == 1 && pulo == 0) {
            if (Animation == 0) {
                Macaco.setImage(img`
                    .....fffffffff....
                    ....fddcddbbdf....
                    ....fdbfdbffef....
                    ....feffefeeeef...
                    ....feffefeeeeff..
                    .....feeeeeeeffef.
                    ...fffffeeeef.fef.
                    ..fdddddeeff..fef.
                    .cccccdddeeff.fef.
                    .cddddcddeeb5f.ff.
                    .cdeeddddee55ff...
                    ..cdfddfde5577fff.
                    ..cdfddfd5577777f.
                    ...fdddd55777777f.
                    ....fee557777777f.
                    .....ffff7777777f.
                    .........ff77777f.
                    ...........ffffff.
                    `)
            }
        }
        if (Macaco.vx != 0 && pulo == 0) {
            if (direita == 1) {
                if (Animation == 1) {
                    Macaco.setImage(img`
                        ....ffff..........
                        ....fddcf.........
                        ....feffffffffffff
                        ....feeeefefbdfbdf
                        ...ffeeeefefddfddf
                        ..feffeeeeeeeffff.
                        ..fef.feeeeffffff.
                        ...f..cffeeeddddf.
                        .....cdbeeeddccccc
                        ..fff55beeddcddddc
                        .f777775eeddddeedc
                        f77777775edfddfdc.
                        .f77777775dfddfdc.
                        ..f77777775ddddf..
                        ...ff7777775eef...
                        .....ff777775f....
                        .......fffff......
                        ..................
                        `)
                }
                if (Animation == 2) {
                    Macaco.setImage(img`
                        ....ffff..........
                        ....fddcf.........
                        ....feffffffffffff
                        ....feeeefefbdfbdf
                        ...ffeeeefefddfddf
                        ..feffeeeeeeeffff.
                        ..fef.feeeeffffff.
                        ...f..cffeeeddddf.
                        .....cdbeeeddccccc
                        ..fff55beeddcddddc
                        .f777775eeddddeedc
                        f77777775edfddfdc.
                        .f77777775dfddfdc.
                        ..f77777775ddddf..
                        ...ff7777775eef...
                        .....ff777775f....
                        .......fffff......
                        ..................
                        `)
                }
                if (Animation == 3) {
                    Macaco.setImage(img`
                        ........fffffff...
                        .......ffdddcddf..
                        ......fffcddbddf..
                        ....ffddceeffef...
                        ....ffbeeeeeff....
                        ...fffeeeeeeef....
                        ..fef.feeeeedfff..
                        ..fef..ffeedcdddf.
                        ..fef..feeddddeedc
                        ...f...feedfddfddc
                        ......f5eedfddfddc
                        ....ff75eeddddddc.
                        ...f77775eedddddc.
                        f.f7777775eedddf..
                        7f777777775eeef...
                        f77777777775ff....
                        .f77777777f.......
                        ..ffffffff........
                        `)
                }
            }
            if (esquerda == 1) {
                if (Animation == 1) {
                    Macaco.setImage(img`
                        ..........ffff....
                        .........fcddf....
                        ffffffffffffef....
                        fdbfdbfefeeeef....
                        fddfddfefeeeeff...
                        .ffffeeeeeeeffef..
                        .ffffffeeeef.fef..
                        .fddddeeeffc..f...
                        cccccddeeebdc.....
                        cddddcddeeb55fff..
                        cdeeddddee577777f.
                        .cdfddfde57777777f
                        .cdfddfd57777777f.
                        ..fdddd57777777f..
                        ...fee5777777ff...
                        ....f577777ff.....
                        ......fffff.......
                        ..................
                        `)
                }
                if (Animation == 2) {
                    Macaco.setImage(img`
                        ..fffffff...fff...
                        .fddcdddf..fcddf..
                        .fddbddcffffffbf..
                        ..feffeefffeeef...
                        ...ffefeefeeeef...
                        .....feeeeeeefff..
                        ...fffffeeeef.fef.
                        ..fcccdeeeff..fef.
                        .cddddcdeeef..fef.
                        .cdeeddddeeff.fef.
                        .cddfddfdee57f.ff.
                        ..cdfddfde577ff...
                        ..cdddddd57777ff..
                        ...fdddd5777777ff.
                        ....fee577777777f.
                        .....ffff7777777f.
                        .........fff7777f.
                        ............ffff..
                        `)
                }
                if (Animation == 3) {
                    Macaco.setImage(img`
                        ...fffffff........
                        ..fddcdddff.......
                        ..fddbddcfff......
                        ...feffeecddff....
                        ....ffeeeeebff....
                        ....feeeeeeefff...
                        ..fffdeeeeef.fef..
                        .fdddcdeeff..fef..
                        cdeeddddeef..fef..
                        cddfddfdeef...f...
                        cddfddfdee5f......
                        .cddddddee57ff....
                        .cdddddee57777f...
                        ..fdddee5777777f.f
                        ...feee577777777f7
                        ....ff57777777777f
                        .......f77777777f.
                        ........ffffffff..
                        `)
                }
            }
        }
    }
})
