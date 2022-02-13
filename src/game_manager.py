import pygame
from src import settings

from src.games.snake.main import SnakeGame


class GameManager:

    def __init__(self):
        self.screen = pygame.display.set_mode(settings.SCREEN_SIZE, pygame.FULLSCREEN)

        self.fps = settings.FPS
        self.clock = pygame.time.Clock()
        self.delta_time = 0

        self.game_running = True

        self.game_list = [SnakeGame]
        self.current_game_index = 0
        self.game_instance = None

    def run(self):

        # Initialize first game
        game = self.game_list[self.current_game_index]
        self.game_instance = game(self.screen)

        while self.game_running:
            self.update()

        pygame.quit()

    def update(self):
        # First thing is to check for occurring events.
        events = pygame.event.get()
        self.check_events(events)

        self.game_instance.update(self.screen, self.delta_time, events)

        # Last things we want to do.
        pygame.display.flip()

        self.delta_time = self.clock.tick(self.fps) / 1000.0
        self.clock.tick(self.fps)

    def check_events(self, events):
        for event in events:  # User did something
            if event.type == pygame.QUIT:  # If user clicked close
                self.game_running = False  # Flag that we are done so we can exit the while loop

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    pass
                    #self.current_game_index += 1
                    #self.game_instance = self.game_list[self.current_game_index]()
