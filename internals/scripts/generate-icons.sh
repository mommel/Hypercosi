#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi


DIRNAME=$(dirname "$0")
echo "DIRNAME: ${DIRNAME}"
echo "INPUT PARAM: ${DIRNAME}/internals/img/hyperCoSi_icon.png"
yarn electron-icon-maker --input=${DIRNAME}/../internals/img/hyperCoSi_icon.png --output=./resources/
