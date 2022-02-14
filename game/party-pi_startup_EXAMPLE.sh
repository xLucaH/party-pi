#!/usr/bin/env bash

set -a
source .env
set +a

set +e
python ./games/flappybird/flappy.py
