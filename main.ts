input.onButtonPressed(Button.A, function () {
    playerSprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    playerSprite.change(LedSpriteProperty.X, 1)
})
let playerSprite: game.LedSprite = null
let speed = 500
let lifes = 3
basic.showNumber(3)
basic.showIcon(IconNames.Heart)
playerSprite = game.createSprite(2, 4)
let appleSprite = game.createSprite(randint(0, 4), 0)
appleSprite.turn(Direction.Right, 90)
appleSprite.set(LedSpriteProperty.Brightness, 50)
basic.forever(function () {
    basic.pause(speed)
    appleSprite.move(1)
    if (appleSprite.isTouching(playerSprite)) {
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, 0)
        lifes += -1
    } else if (appleSprite.get(LedSpriteProperty.Y) == 4) {
        basic.pause(100)
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, 0)
        speed += -10
    }
    if (lifes == 0) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
})
basic.forever(function () {
	
})
