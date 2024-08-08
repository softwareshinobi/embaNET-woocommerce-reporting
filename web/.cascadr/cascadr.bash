#!/bin/bash

sourceDirectory="../"

appName="cascadr.py"

##

echo "##"
echo "## start cascadr template work"
echo "##"

find $sourceDirectory -iname "*.html" -exec python3 $appName {} \;
