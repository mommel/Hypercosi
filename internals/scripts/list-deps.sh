#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi


grep "require('" *.js bin/ main/ renderer/ -R |
    grep '.js:' |
    sed "s/.*require('\([^'\/]*\).*/\1/" |
    grep -v '^\.' |
    sort |
    uniq
