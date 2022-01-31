import pygame as pg

pg.init()
pg.font.init()

screen = pg.display.set_mode([500, 500])

font = pg.font.SysFont('Comic Sans MS', 30)
textsurface = font.render('Hallo Steven, es läuft!', False, (0, 0, 0))

# Run until the user asks to quit
running = True
while running:

    # Did the user click the window close button?
    for event in pg.event.get():
        if event.type == pg.QUIT:
            running = False

    # Fill the background with white
    screen.fill((255, 255, 255))

    # Draw a solid blue circle in the center
    pg.draw.circle(screen, (0, 0, 255), (250, 250), 75)
    screen.blit(textsurface, (0, 0))

    # Flip the display
    pg.display.flip()

# Done! Time to quit.
pg.quit()