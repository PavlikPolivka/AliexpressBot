#!/bin/sh

text="$(casperjs javascript/random.js)"

echo "$text \n"
twidge update  "Today's random item is:  $text Enjoy!"
