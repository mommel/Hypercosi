#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi

move2trash () {
  BASENAME=$(basename $1)
  mv "$1" "${HOME}/.Trash/${BASENAME}-${RANDOM}"
  STRLEN=${#BASENAME}
  AMOUNT=$(expr 42 - ${STRLEN} )
  EMPTYSTR=""
  while [ ${#EMPTYSTR} -lt $AMOUNT ]
  do
    EMPTYSTR="${EMPTYSTR} "
  done
  echo "║ MV ${BASENAME}${EMPTYSTR}║"
}

echo "╔═════════════════════╗"
echo "║ Cleaning yarn cache ║"
echo "╚═════════════════════╝"
echo " "
yarn cache clean
echo "╔══════════════════════════════════════════════╗"
move2trash yarn.lock && \
move2trash package-lock.json && \
move2trash dll && \
move2trash app/dist && \
move2trash node_modules
echo "╚══════════════════════════════════════════════╝"
echo " "
echo "╔═════════════════════════╗"
echo "║ Install and build again ║"
echo "╚═════════════════════════╝"
echo " "
. !$
yarn install
yarn build
yarn jest --clearCache
echo "╔═════════════════════╗"
echo "║ Cleaning jest cache ║"
echo "╚═════════════════════╝"
echo " "
echo " "
echo "Ready you can start again!"
