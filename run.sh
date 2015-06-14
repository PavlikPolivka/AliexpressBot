#!/bin/sh

text="$(casperjs AliexpressBot/javascript/random.js)"

twidge update  "Today's random item is:  $text Enjoy!"
