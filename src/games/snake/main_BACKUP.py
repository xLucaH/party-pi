import pygame
import random

pygame.init()

white = (255, 255, 255)
yellow = (255, 255, 102)
black = (0, 0, 0)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (50, 153, 213)

dis_width = 480
dis_height = 320

dis = pygame.display.set_mode((dis_width, dis_height))

# Using absolute paths will make it unable to run the game on different pc's, since every path is likely to be unique.
# bg = pygame.image.load('C:\\Users\\Carsten\\partypi\\party-pi\\src\\games\\snake\\background.jpg')
bg = pygame.image.load('background.jpg')  # If a file is in the same directory, you can just import it by its name.
bg = pygame.transform.scale(bg, (dis_width, dis_height))

pygame.display.set_caption('Snake by Party-Pi')

clock = pygame.time.Clock()

snake_block = 10
snake_speed = 10

font_style = pygame.font.SysFont('Blanch', 30)
score_font = pygame.font.SysFont('Osaka', 40)


def your_score(score):
    value = score_font.render("Your Score: " + str(score), True, white)
    dis.blit(value, [0, 0])


def our_snake(snake_block, snake_list):
    for x in snake_list:
        pygame.draw.rect(dis, black, [x[0], x[1], snake_block, snake_block])


def message(msg, color):
    mesg = font_style.render(msg, True, color)
    dis.blit(mesg, [dis_width/3, dis_height/2])


def game_loop():
    game_over = False
    game_close = False

    x1 = dis_width / 2
    y1 = dis_height / 2

    x1_change = 0
    y1_change = 0
    
    snake_list = []
    length_of_snake = 1

    # List of all 4 direction values the snake can move.
    directions = [
        (0, - snake_block),
        (snake_block, 0),
        (0, snake_block),
        (- snake_block, 0)
    ]

    current_direction = 0  # current index that determines which direction the snake moves.

    # generate position for snacks
    foodx = round(random.randrange(0, dis_width - snake_block) / 10.0) * 10.0
    foody = round(random.randrange(0, dis_height - snake_block) / 10.0) * 10.0

    while not game_over:
        
       # game over message and score
        while game_close:
            dis.fill(black)
            message('You Lost! Press the [Space] to play again', white)
            your_score(length_of_snake - 1)
            
            pygame.display.update()
        
            # once buttons are pressed, end or start game
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_ESCAPE:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_SPACE:
                        game_loop()

        # button/key assignment
        for event in pygame.event.get(): 
            if event.type == pygame.QUIT:
                game_over = True

            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                current_direction += 1

                # Reset current direction to first entry.
                if current_direction >= 4:
                    current_direction = 0

                # Set x and y change to our current direction the snake is moving.
                x1_change, y1_change = directions[current_direction]

        dis.blit(bg, (0, 0))
        
        # assigning new position to x and y
        x1 += x1_change
        y1 += y1_change
        
        # once snake hits wall, end the game
        if x1 >= dis_width or x1 < 0 or y1 >= dis_height or y1 < 0:
            game_close = True
            dis.fill(black)
        
        # use location to draw small rectangles for food
        food_position = [foodx, foody, snake_block, snake_block]
        pygame.draw.rect(dis, red, food_position)
        pygame.draw.rect(dis, green, food_position) 
        
        # add new parts to snake
        # We can initialize our list directly with our values instead of appending them in two extra lines of code.
        # snake_head.append(x1)
        # snake_head.append(y1)
        snake_head = [x1, y1]

        snake_list.append(snake_head)
        
        # delete prior part of the snake
        if len(snake_list) > length_of_snake:
            del snake_list[0]
        
        # if no snake is too short, end game
        for x in snake_list[:-1]:
            if x == snake_head:
                game_close = True
        
        our_snake(snake_block, snake_list)
        your_score(length_of_snake - 1)
        
        pygame.display.update()

        # if snake ate snacks, generate a new one
        if x1 == foodx and y1 == foody:
            foodx = round(random.randrange(0, dis_width - snake_block) / 10.0) * 10.0
            foody = round(random.randrange(0, dis_height - snake_block) / 10.0) * 10.0
            length_of_snake += 1
         
        clock.tick(snake_speed)
    
    pygame.quit()
    quit()


game_loop()
