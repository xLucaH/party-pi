########################################################################
#                                                                      #
#                      Single Player Pong Game                         #
#                                                                      #
#                                                                      #
# CREATED BY    :    Nithin.P                                          #
#                    nithup123@gmail.com                               #
#                    http://facebook.com/nithin.nithinp                #
#                                                                      #
# Description   :    This is a Single Player Pong Game  coded          #
#                    by me in python using pygame module.              #
#                                                                      #
# License       :    This Source Code is free to use                   #
#                    for educational purpose only.                     #
#                                                                      #
# Instructions  :    This is like Single Player Table Tennis           #
#                    Hit the ball using the hit bar.                   #
#                    USE LEFT key for move hit bar to left.            #
#                    USe RIGHT key for move hit bar to right.          #
#                                                                      #
########################################################################


import pygame
import sys
import random

from game import settings
from game.src.scenes import SceneBase


class PongGame(SceneBase):

    def __init__(self, screen, handler):
        super().__init__()

        self.handler = handler

        self.white = (255, 255, 255)
        self.black = (0, 0, 0)
        self.green = (0, 255, 0)
        self.red = (255, 0, 0)
        self.blue = (0, 0, 255)
        self.gray = (128, 128, 128)
        self.size = settings.SCREEN_SIZE
        self.ball_centre_y = 150
        self.ball_centre_x = (int((random.random() * 100000) % (self.size[0] - 200))) + 100
        self.ball_radius = 15
        self.ball_direction = 'UP_LEFT'
        self.ball_speed = 10  # Ball speed.
        self.hit_bar_speed = 40  # Hit Bar Speed.
        self.hit_bar_length = 100
        self.hit_bar_height = 25
        self.hit_bar_left = int(self.size[0] / 2) - int(self.hit_bar_length / 2)
        self.time1 = pygame.time.get_ticks()
        self.can_accel_left = False
        self.can_accel_right = False
        self.game_over = False
        self.paused_game = False
        self.score = 0
        self.speed = 15
        self.panel_direction = self.speed
        self.screen = screen

        self.handler.subscribe_to_button(self.change_direction)

    def reset_game(self):
        self.ball_centre_y = 150
        self.ball_centre_x = (int((random.random() * 100000) % (self.size[0] - 200))) + 100
        self.ball_direction = 'UP_LEFT'
        self.hit_bar_left = int(self.size[0] / 2) - int(self.hit_bar_length / 2)
        self.time1 = pygame.time.get_ticks()
        self.can_accel_left = False
        self.can_accel_right = False
        self.game_over = False
        self.paused_game = False
        self.score = 0

    def draw_initial_screen(self):
        self.play()
        self.draw_screen()
        font = pygame.font.Font(None, 220)
        gameText = font.render("Nithin's", True, self.white)
        overText = font.render('Pong', True, self.white)
        over1Text = font.render('Game', True, self.white)
        gameRect = gameText.get_rect()
        overRect = overText.get_rect()
        over1Rect = over1Text.get_rect()
        gameRect.centerx = (self.size[0] / 2)
        gameRect.centery = (self.size[1] / 2) - 150
        overRect.centerx = (self.size[0] / 2)
        overRect.centery = (self.size[1] / 2)
        over1Rect.centerx = (self.size[0] / 2)
        over1Rect.centery = (self.size[1] / 2 + 150)
        self.screen.blit(gameText, gameRect)
        self.screen.blit(overText, overRect)
        self.screen.blit(over1Text, over1Rect)
        self.print_press_any_key()
        pygame.display.update()

    def print_game_over(self):
        font = pygame.font.Font(None, 260)
        font1 = pygame.font.Font(None, 50)
        gameText = font.render('Game', True, self.white)
        overText = font.render('Over', True, self.white)
        sc = "Your Score : " + str(self.score)
        scoreText = font1.render(sc, True, self.white)
        gameRect = gameText.get_rect()
        overRect = overText.get_rect()
        scoreRect = scoreText.get_rect()
        gameRect.centerx = (self.size[0] / 2)
        gameRect.centery = (self.size[1] / 2) - 150
        overRect.centerx = (self.size[0] / 2)
        overRect.centery = (self.size[1] / 2)
        scoreRect.centerx = (self.size[0] / 2)
        scoreRect.centery = (self.size[1] / 2) + 120
        self.screen.blit(gameText, gameRect)
        self.screen.blit(overText, overRect)
        self.screen.blit(scoreText, scoreRect)

    def print_paused_game(self):
        font = pygame.font.Font(None, 230)
        overText = font.render('Paused', True, self.white)
        overRect = overText.get_rect()
        overRect.centerx = (self.size[0] / 2)
        overRect.centery = (self.size[1] / 2)
        self.screen.blit(overText, overRect)
        self.print_press_any_key()

    def print_press_any_key(self):
        font = pygame.font.Font(None, 30)
        if self.paused_game:
            text = font.render("Press Escape key to continue", True, self.gray)
        else:
            text = font.render("Press any key to continue", True, self.gray)
        rect = text.get_rect()
        rect.centerx = self.size[0] - 150
        rect.centery = self.size[1] - 50
        self.screen.blit(text, rect)

    def draw_screen(self):
        self.screen.fill(self.black)
        font = pygame.font.Font(None, 100)
        scoreText = font.render(str(self.score), True, self.white)
        scoreRect = scoreText.get_rect()
        scoreRect.centerx = self.size[0] - 100
        scoreRect.centery = 100
        self.screen.blit(scoreText, scoreRect)
        pygame.draw.circle(self.screen, self.red, (self.ball_centre_x, self.ball_centre_y), self.ball_radius)
        pygame.draw.rect(self.screen, self.blue, (self.hit_bar_left, (self.size[1] - self.hit_bar_height), self.hit_bar_length, self.hit_bar_height))

    def play(self):
        if pygame.time.get_ticks() > (self.time1 + 11):
            # Code to control movement of ball.
            if self.ball_direction == 'UP_LEFT':
                if (self.ball_centre_x - self.ball_speed) > self.ball_radius and (self.ball_centre_y - self.ball_speed) > self.ball_radius:
                    self.ball_centre_x -= self.ball_speed
                    self.ball_centre_y -= self.ball_speed
                elif (self.ball_centre_y - self.ball_speed) > self.ball_radius:  # Ball exceeds left side of screen.
                    self.ball_direction = 'UP_RIGHT'
                elif (self.ball_centre_x - self.ball_speed) > self.ball_radius:  # Ball exceeds top of screen.
                    self.ball_direction = 'DOWN_LEFT'
                else:  # Ball exceeds both left and top of screen.
                    self.ball_direction = 'DOWN_RIGHT'
            if self.ball_direction == 'UP_RIGHT':
                if (self.ball_centre_x + self.ball_speed) < (self.size[0] - self.ball_radius) and (self.ball_centre_y - self.ball_speed) > self.ball_radius:
                    self.ball_centre_x += self.ball_speed
                    self.ball_centre_y -= self.ball_speed
                elif (self.ball_centre_y - self.ball_speed) > self.ball_radius:  # Ball exceeds right side of screen.
                    self.ball_direction = 'UP_LEFT'
                elif (self.ball_centre_x + self.ball_speed) < (self.size[0] - self.ball_radius):  # Ball exceeds bottom of screen.
                    self.ball_direction = 'DOWN_RIGHT'
                else:  # Ball exceeds both right side and bottom of screen.
                    self.ball_direction = 'DOWN_LEFT'
            if self.ball_direction == 'DOWN_LEFT':
                if (self.ball_centre_x - self.ball_speed) > self.ball_radius and (self.ball_centre_y + self.ball_speed) < (self.size[1] - self.ball_radius):
                    if (self.ball_centre_x + self.ball_radius) >= self.hit_bar_left and (self.ball_centre_x - self.ball_radius) <= (
                            self.hit_bar_left + self.hit_bar_length):
                        if (self.ball_centre_y + self.ball_speed) < (self.size[1] - (self.ball_radius + self.hit_bar_height)):
                            self.ball_centre_x -= self.ball_speed
                            self.ball_centre_y += self.ball_speed
                        else:  # Condition of scoring.
                            self.ball_direction = 'UP_LEFT'
                            self.score += 1
                    elif ((self.ball_centre_x + self.ball_radius) < self.hit_bar_left or (self.ball_centre_x - self.ball_radius) > (
                            self.hit_bar_left + self.hit_bar_length)):
                        if (self.ball_centre_y + self.ball_radius) > (self.size[1] - self.hit_bar_height):  # Condition of game over.
                            self.ball_centre_y = self.size[1] - self.ball_radius
                            self.game_over = True
                        else:
                            self.ball_centre_x -= self.ball_speed
                            self.ball_centre_y += self.ball_speed
                    else:
                        self.ball_centre_x -= self.ball_speed
                        self.ball_centre_y += self.ball_speed

                elif (self.ball_centre_x - self.ball_speed) > self.ball_radius:
                    self.ball_direction = 'UP_LEFT'
                elif (self.ball_centre_y + self.ball_speed) < (self.size[1] - self.ball_radius):
                    self.ball_direction = 'DOWN_RIGHT'
                else:
                    self.direction = 'UP_RIGHT'
            if self.ball_direction == 'DOWN_RIGHT':
                if (self.ball_centre_x + self.ball_speed) < (self.size[0] - self.ball_radius) and (self.ball_centre_y + self.ball_speed) < (
                        self.size[1] - self.ball_radius):
                    if (self.ball_centre_x + self.ball_radius) >= self.hit_bar_left and (self.ball_centre_x - self.ball_radius) <= (
                            self.hit_bar_left + self.hit_bar_length):
                        if (self.ball_centre_y + self.ball_speed) < (self.size[1] - (self.ball_radius + self.hit_bar_height)):
                            self.ball_centre_x += self.ball_speed
                            self.ball_centre_y += self.ball_speed
                        else:  # Condition of scoring.
                            self.ball_direction = 'UP_RIGHT'
                            self.score += 1
                    elif ((self.ball_centre_x + self.ball_radius) < self.hit_bar_left or (self.ball_centre_x - self.ball_radius) > (
                            self.hit_bar_left + self.hit_bar_length)):
                        if (self.ball_centre_y + self.ball_radius) > (self.size[1] - self.hit_bar_height):  # Condition of game over.
                            self.ball_centre_y = self.size[1] - self.ball_radius
                            self.game_over = True
                        else:
                            self.ball_centre_x += self.ball_speed
                            self.ball_centre_y += self.ball_speed
                    else:
                        self.ball_centre_x += self.ball_speed
                        self.ball_centre_y += self.ball_speed
                elif (self.ball_centre_x + self.ball_speed) < (self.size[0] - self.ball_radius):
                    self.ball_direction = 'UP_RIGHT'
                elif (self.ball_centre_y + self.ball_speed) < (self.size[1] - self.ball_radius):
                    self.ball_direction = 'DOWN_LEFT'
                else:
                    self.ball_direction = 'UP_LEFT'
            # Code to control Hit Bar Position.

            self.hit_bar_left += self.panel_direction
            self.panel_direction = self.speed

            self.time1 = pygame.time.get_ticks()

    def change_direction(self, delta):
        self.speed = (self.speed * -1)
        self.panel_direction = self.speed

    def update(self, screen, delta_time, events):

        if self.handler.is_button_pressed():
            self.change_direction(delta_time)

        for event in events:
            if event.type == pygame.QUIT:
                if self.paused_game:
                    pygame.quit()
                    sys.exit()

                self.game_over = True
                self.print_game_over()
                pygame.display.update()
                time3 = pygame.time.get_ticks()
                while pygame.time.get_ticks() < (time3 + 1000):
                    pygame.time.get_ticks()

                pygame.quit()
                sys.exit()

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    if self.paused_game == False:
                        self.paused_game = True
                        self.print_paused_game()
                        pygame.display.update()
                    else:
                        self.paused_game = False

        if self.paused_game == False:
            self.play()
            self.draw_screen()
        if self.game_over:
            self.handler.game_over()
