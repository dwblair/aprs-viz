#!/bin/bash

rtl_fm -f 144.39e6  -s 200000 -r 48000 - | aplay -r 48000 -f S16_LE