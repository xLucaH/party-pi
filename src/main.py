import pygame
from src.game_manager import GameManager


def main():
    pygame.init()  # Init pygame is the first thing we ALWAYS have to do
    pygame.font.init()  # Using fonts as well

    pygame.mouse.set_visible(False)

    game_manager = GameManager()
    game_manager.run()


if __name__ == "__main__":
    main()
