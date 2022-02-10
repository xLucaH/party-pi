import pygame
import time
import random

pygame.init()

white = (255,255,255)
black=(0,0,0)
red=(255,0,0)

dis_width = 800
dis_height = 600

dis=pygame.display.set_mode((dis_width,dis_height))
pygame.display.set_caption('Snake by Party-Pi')

clock = pygame.time.Clock()

snake_block = 10
snake_speed= 15

font_style = pygame.font.SysFont(None, 20)

def message(msg, color):
    mesg = font_style.render(msg, True, color)
    dis.blit(mesg, [dis_width/3, dis_height/2])

def gameLoop():
    game_over= False
    game_close = False

    x1 = dis_width/2
    y1 = dis_height/2

    x1_change = 0
    y1_change = 0

    foodx = round(random.randrange(0, dis_width - snake_block) / 10.0) * 10.0
    foody = round(random.randrange(0, dis_height - snake_block) / 10.0) * 10.0

    while not game_over:
        
        while game_close == True:
            dis.fill(black)
            message('You Lost! Press the Enter to play again', white)
            pygame.display.update()
        
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_ESCAPE:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_KP_ENTER:
                        gameLoop()

        for event in pygame.event.get(): 
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:       
                if event.key == pygame.K_LEFT:
                    x1_change = - snake_block
                    y1_change = 0
                elif event.key == pygame.K_RIGHT:
                    x1_change = snake_block
                    y1_change = 0
                elif event.key == pygame.K_UP:
                    x1_change = 0
                    y1_change = - snake_block
                elif event.key == pygame.K_DOWN:
                    x1_change = 0
                    y1_change = snake_block
        
        x1 += x1_change
        y1 += y1_change
        
        if x1 >= dis_width or x1 < 0 or y1 >= dis_height or y1 < 0:
            game_close = True
            dis.fill(black)
 
        dis.fill(white)
        pygame.draw.rect(dis,red,[foodx,foody,snake_block, snake_block])
        pygame.draw.rect(dis,black,[x1,y1,snake_block, snake_block]) 
        pygame.display.update()
        
        if x1 == foodx and y1 == foody:
            print('Nom Nom Nom!')
        clock.tick(snake_speed)
    
    pygame.quit()
    quit()

gameLoop()