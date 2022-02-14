import pygame
import io
from .. import settings

try:
    with io.open('/sys/firmware/devicetree/base/model', 'r') as m:
        if 'raspberry pi' in m.read().lower():
            IS_RASPBERRY = True
            print("USING RASPBERRY PI OS")

except Exception as e:
    print(e)
    IS_RASPBERRY = False

if IS_RASPBERRY:
    import gpiozero


class GameHandler:
    """
    Provides the event handling for our game games.
    """

    def __init__(self):
        self._score = 0
        self.events = []
        self.button_pressed = False
        self.button = None

        if IS_RASPBERRY:
            self.button = gpiozero.Button(settings.BUTTON_PIN_NUMBER, pull_up=False)
            self.button.when_released = self.gpio_button_callback

    def add_score(self, value):
        self._score += value

    def get_score(self):
        return self._score

    def update(self):
        self.events = pygame.event.get()
        self.button_pressed = False

    def gpio_button_callback(self):
        print("BUTTON PRESSED")
        self.button_pressed = True

    def is_button_pressed(self):
        """
        Checks weather a button press occurred.
        Handles input via a physical button when using a raspberry, otherwise it uses the keyboard's space bar.
        """
        if IS_RASPBERRY and self.button:
            # Pin numbers maps not to physical order but to gpio order/bmc
            # Taken from https://www.raspberrypi-spy.co.uk/2012/06/simple-guide-to-the-rpi->
            return self.button_pressed

        for event in self.events:
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                return True

        return False
