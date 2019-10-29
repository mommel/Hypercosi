#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi

PROJECTROOT=$(git rev-parse --show-toplevel)
INPUTFILE="${PROJECTROOT}/internals/img/hyperCoSi_icon.png"
APPICONS="${PROJECTROOT}/app/images/icons"
RESOUCES="${PROJECTROOT}/resources"

if [[ ! -f "${INPUTFILE}" ]]; then
    echo " ERROR INPUT FILE NOT FOUND"
    echo "${INPUTFILE} needs to exist"
    exit 1
fi
echo "║"
echo "║ Running electron-icon-maker on"
echo "║ ${INPUTFILE}"
echo "║"
yarn electron-icon-maker --input="${INPUTFILE}" --output="${RESOUCES}/"
echo "║"
echo "║ Removing icons folder from app/images"
echo "║"
echo " "
rm -rf ${APPICONS}
echo "║"
echo "║ Recreating files in app/images"
echo "║"
mkdir ${APPICONS}
cp -R ${PROJECTROOT}/resources/icons/ ${APPICONS}/
cp  ${PROJECTROOT}/resources/icon.png ${APPICONS}/icon.png
