#!/bin/sh

text="$(casperjs javascript/random.js)"

twidge update  "Today's random item is:  $text Enjoy!"
