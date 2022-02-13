import pygame
import random

from src.scenes import SceneBase


class Colors:
    WHITE = (255, 255, 255)
    BLACK = (0, 0, 0)
    RED = (255, 0, 0)
    GREEN = (0, 255, 0)


class Config:
    SNAKE_BLOCK = 10
    SNAKE_SPEED = 10


class SnakeGame(SceneBase):

    def __init__(self, screen):
        super().__init__()

        self.screen = screen
        self.screen_x, self.screen_y = self.screen.get_size()

        self.game_over = False
        self.game_close = False

        self.x1 = self.screen_x / 2
        self.y1 = self.screen_y / 2

        self.x1_change = 0
        self.y1_change = 0

        self.snake_block = Config.SNAKE_BLOCK
        self.snake_speed = Config.SNAKE_SPEED
        self.snake_list = []
        self.length_of_snake = 1

        self.bg = pygame.image.load('games/snake/background.jpg')
        self.bg = pygame.transform.scale(self.bg, (self.screen_x, self.screen_y))

        # List of all 4 direction values the snake can move.
        self.directions = [
            (0, - self.snake_block),
            (self.snake_block, 0),
            (0, self.snake_block),
            (- self.snake_block, 0)
        ]

        self.current_direction = 0  # current index that determines which direction the snake moves.

        # generate position for snacks
        self.foodx = round(random.randrange(0, self.screen_x - self.snake_block) / 10.0) * 10.0
        self.foody = round(random.randrange(0, self.screen_y - self.snake_block) / 10.0) * 10.0

    def update(self, screen, delta_time, events):
        # button/key assignment

        for event in events:
            if event.type == pygame.KEYDOWN:

                if event.key == pygame.K_SPACE:
                    self.current_direction += 1

                    # Reset current direction to first entry.
                    if self.current_direction >= 4:
                        self.current_direction = 0

                    # Set x and y change to our current direction the snake is moving.
                    self.x1_change, self.y1_change = self.directions[self.current_direction]

        self.screen.blit(self.bg, (0, 0))

        # assigning new position to x and y
        self.x1 += self.x1_change
        self.y1 += self.y1_change

        # once snake hits wall, end the game
        if self.x1 >= self.screen_x or self.x1 < 0 or self.y1 >= self.screen_y or self.y1 < 0:
            self.game_close = True
            self.screen.fill(Colors.BLACK)

        # use location to draw small rectangles for food
        food_position = [self.foodx, self.foody, self.snake_block, self.snake_block]
        pygame.draw.rect(self.screen, Colors.RED, food_position)

        snake_head = [self.x1, self.y1]
        self.snake_list.append(snake_head)

        # delete prior part of the snake
        if len(self.snake_list) > self.length_of_snake:
            del self.snake_list[0]

        # if no snake is too short, end game
        for x in self.snake_list[:-1]:
            if x == snake_head:
                game_close = True

        self.our_snake(self.snake_block, self.snake_list)
        self.your_score(self.length_of_snake - 1)

        pygame.display.update()

        # if snake ate snacks, generate a new one
        if self.x1 == self.foodx and self.y1 == self.foody:
            self.foodx = round(random.randrange(0, self.screen_x - self.snake_block) / 10.0) * 10.0
            self.foody = round(random.randrange(0, self.screen_y - self.snake_block) / 10.0) * 10.0
            self.length_of_snake += 1

    def your_score(self, score):
        value = self.font.render("Your Score: " + str(score), True, Colors.WHITE)
        self.screen.blit(value, [0, 0])

    def our_snake(self, snake_block, snake_list):
        for x in snake_list:
            pygame.draw.rect(self.screen, Colors.BLACK, [x[0], x[1], snake_block, snake_block])

    def message(self, msg, color):
        mesg = self.font.render(msg, True, color)
        self.screen.blit(mesg, [self.screen_x / 3, self.screen_y / 2])
