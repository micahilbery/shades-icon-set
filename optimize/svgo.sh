#!/bin/bash
echo 'Enter name of svg to clean'
echo ''
read -p 'Icon name: ' iconvar
iconvar=$iconvar'.svg'
svgo --pretty --config=svgo.config.js $iconvar
echo 'Done'
