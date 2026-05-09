controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Talking == 0) {
        Up = 1
        animation.runImageAnimation(
        Player,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        250,
        true
        )
        Direction = 1
    }
})
function TextSetUp () {
    Speech.setFlag(SpriteFlag.RelativeToCamera, true)
    Speech.setPosition(80, 96)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dis_Betwen_P_And_NPC_1 <= Distance_of_interaction) {
        Talking = 1
        Speech = sprites.create(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1177777777777777777777777777777777777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1177777777777777777777777777777777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1177777777777777ffffffff7777777777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1177777777777777ffffffff7777777777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777777777ffffff2222ffffff777777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777777777ffffff2222ffffff777777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1177777777ffffff22222222ffffff7777777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1177777777ffffff22222222ffffff7777777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11777777ffffffeeeeeeeeeeeeffffff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffffffeeeeeeeeeeeeffffff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffffee222222222222eeeeff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffffee222222222222eeeeff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffee22ffffffffffff22eeff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffee22ffffffffffff22eeff77777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11777777ffffffffeeeeeeeeffffffff77777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11777777ffffffffeeeeeeeeffffffff77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777ffffeeffbbff4444ffbbffeeffff777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777ffffeeffbbff4444ffbbffeeffff777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777ffeeee4411ffddddff1144eeeeff777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777ffeeee4411ffddddff1144eeeeff777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ffeeeeddddddddddddeeeeff77777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11777777ffeeeeddddddddddddeeeeff77777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1177777777ffeeee44444444eeeeff7777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1177777777ffeeee44444444eeeeff7777777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ee44ff222222222222ff44ee77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11777777ee44ff222222222222ff44ee77777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777774411ff222222222222ff114477777711
            11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff117777774411ff222222222222ff114477777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff117777774444ff444455554444ff444477777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff117777774444ff444455554444ff444477777711
            11ff555f555f555f555f555fff555fff555f555fff555f555f5fff5f555f5f5fff5f5f5f555fffffffffffffffffffffffffffffffffffffffffffff11777777777777ffffffffffff77777777777711
            11ff5f5f5f5f5fff5fff5fffff5f5ffff5ff5f5fff5fff5f5f55ff5ff5ff5f55ff5f5f5f5fffffffffffffffffffffffffffffffffffffffffffffff11777777777777ffffffffffff77777777777711
            11ff555f55ff555f555f555fff555ffff5ff5f5fff5fff5f5f5f5f5ff5ff5f5f5f5f5f5f555fffffffffffffffffffffffffffffffffffffffffffff11777777777777ffff7777ffff77777777777711
            11ff5fff5f5f5fffff5fff5fff5f5ffff5ff5f5fff5fff5f5f5ff55ff5ff5f5ff55f5f5f5fffffffffffffffffffffffffffffffffffffffffffffff11777777777777ffff7777ffff77777777777711
            11ff5fff5f5f555f555f555fff5f5ffff5ff555fff555f555f5fff5ff5ff5f5fff5f555f555fffffffffffffffffffffffffffffffffffffffffffff1177777777777777777777777777777777777711
            11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1177777777777777777777777777777777777711
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            `, SpriteKind.Player)
        TextSetUp()
        pause(1000)
        pauseUntil(() => controller.A.isPressed())
        sprites.destroy(Speech)
        Talking = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (Talking == 0) {
        Down = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Talking == 0) {
        Left = 1
        animation.runImageAnimation(
        Player,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        250,
        true
        )
        Direction = 3
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (Talking == 0) {
        Right = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Talking == 0) {
        Left = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Talking == 0) {
        Right = 1
        animation.runImageAnimation(
        Player,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        250,
        true
        )
        Direction = 4
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (Talking == 0) {
        Up = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Talking == 0) {
        Down = 1
        animation.runImageAnimation(
        Player,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        250,
        true
        )
        Direction = 2
    }
})
let Right = 0
let Left = 0
let Down = 0
let Dis_Betwen_P_And_NPC_1 = 0
let Speech: Sprite = null
let Direction = 0
let Up = 0
let Talking = 0
let Player: Sprite = null
let Distance_of_interaction = 0
Distance_of_interaction = 32
Player = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Player)
Player.setPosition(120, 120)
let NPC_1 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ......ffff......
    ....ffeeeeff....
    ...ffeeeeeeff...
    ..ffff4eeeffff..
    ..fff444eeffff..
    ..fff4444eefff..
    ..f4e444444e4f..
    ..f44ff44ff44f..
    ..fe4dddddd4ef..
    ...feddbbddef...
    ...ffe4444eff...
    ..e4fb1111bf4e..
    ..4df111111fd4..
    ..44f666666f44..
    .....ffffff.....
    .....ff..ff.....
    `, SpriteKind.Player)
NPC_1.setPosition(168, 112)
forever(function () {
    Dis_Betwen_P_And_NPC_1 = Math.sqrt((Player.x - NPC_1.x) * (Player.x - NPC_1.x) + (Player.y - NPC_1.y) * (Player.y - NPC_1.y))
    info.setScore(Dis_Betwen_P_And_NPC_1)
})
forever(function () {
    if (Dis_Betwen_P_And_NPC_1 <= Distance_of_interaction) {
        animation.runImageAnimation(
        NPC_1,
        [img`
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            .....55.....
            .....55.....
            .....55.....
            .....55.....
            .....55.....
            ............
            .....55.....
            .....55.....
            ............
            ....ffff....
            ..ffeeeeff..
            .ffeeeeeeff.
            ffff4eeeffff
            fff444eeffff
            fff4444eefff
            f4e444444e4f
            f44ff44ff44f
            fe4dddddd4ef
            .feddbbddef.
            .ffe4444eff.
            e4fb1111bf4e
            4df111111fd4
            44f666666f44
            ...ffffff...
            ...ff..ff...
            `],
        500,
        false
        )
    } else {
        animation.runImageAnimation(
        NPC_1,
        [img`
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ............
            ....ffff....
            ..ffeeeeff..
            .ffeeeeeeff.
            ffff4eeeffff
            fff444eeffff
            fff4444eefff
            f4e444444e4f
            f44ff44ff44f
            fe4dddddd4ef
            .feddbbddef.
            .ffe4444eff.
            e4fb1111bf4e
            4df111111fd4
            44f666666f44
            ...ffffff...
            ...ff..ff...
            `],
        500,
        false
        )
    }
})
forever(function () {
    if (Talking == 1) {
        controller.moveSprite(Player, 0, 0)
    } else {
        controller.moveSprite(Player, 80, 80)
    }
})
forever(function () {
    if (Talking == 0) {
        if (Up == 0 && Left == 0 && (Down == 0 && Right == 0)) {
            animation.stopAnimation(animation.AnimationTypes.All, Player)
            if (Direction == 1) {
                animation.runImageAnimation(
                Player,
                [img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `],
                150,
                true
                )
            } else {
                if (Direction == 2) {
                    animation.runImageAnimation(
                    Player,
                    [img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `],
                    150,
                    true
                    )
                } else {
                    if (Direction == 3) {
                        animation.runImageAnimation(
                        Player,
                        [img`
                            . . . . f f f f f f . . . . . . 
                            . . . f 2 f e e e e f f . . . . 
                            . . f 2 2 2 f e e e e f f . . . 
                            . . f e e e e f f e e e f . . . 
                            . f e 2 2 2 2 e e f f f f . . . 
                            . f 2 e f f f f 2 2 2 e f . . . 
                            . f f f e e e f f f f f f f . . 
                            . f e e 4 4 f b e 4 4 e f f . . 
                            . . f e d d f 1 4 d 4 e e f . . 
                            . . . f d d d d 4 e e e f . . . 
                            . . . f e 4 4 4 e e f f . . . . 
                            . . . f 2 2 2 e d d 4 . . . . . 
                            . . . f 2 2 2 e d d e . . . . . 
                            . . . f 5 5 4 f e e f . . . . . 
                            . . . . f f f f f f . . . . . . 
                            . . . . . . f f f . . . . . . . 
                            `],
                        150,
                        true
                        )
                    } else {
                        if (Direction == 4) {
                            animation.runImageAnimation(
                            Player,
                            [img`
                                . . . . . . f f f f f f . . . . 
                                . . . . f f e e e e f 2 f . . . 
                                . . . f f e e e e f 2 2 2 f . . 
                                . . . f e e e f f e e e e f . . 
                                . . . f f f f e e 2 2 2 2 e f . 
                                . . . f e 2 2 2 f f f f e 2 f . 
                                . . f f f f f f f e e e f f f . 
                                . . f f e 4 4 e b f 4 4 e e f . 
                                . . f e e 4 d 4 1 f d d e f . . 
                                . . . f e e e 4 d d d d f . . . 
                                . . . . f f e e 4 4 4 e f . . . 
                                . . . . . 4 d d e 2 2 2 f . . . 
                                . . . . . e d d e 2 2 2 f . . . 
                                . . . . . f e e f 4 5 5 f . . . 
                                . . . . . . f f f f f f . . . . 
                                . . . . . . . f f f . . . . . . 
                                `],
                            150,
                            true
                            )
                        }
                    }
                }
            }
        }
    }
})
