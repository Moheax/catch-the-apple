def on_button_pressed_a():
    playerSprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    playerSprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

playerSprite: game.LedSprite = None
score = 0
playerSprite = game.create_sprite(2, 4)
appleSprite = game.create_sprite(randint(0, 4), 0)
appleSprite.turn(Direction.RIGHT, 90)
appleSprite.set(LedSpriteProperty.BRIGHTNESS, 50)

def on_forever():
    basic.pause(500)
    appleSprite.move(1)
    if appleSprite.is_touching(playerSprite):
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, 0)
        game.add_score(1)
    elif appleSprite.get(LedSpriteProperty.Y) == 4:
        appleSprite.set(LedSpriteProperty.X, randint(0, 4))
        appleSprite.set(LedSpriteProperty.Y, 0)
        game.add_score(-1)
    if game.score() == 10:
        basic.show_string("W")
        game.pause()
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
