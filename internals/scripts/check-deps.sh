#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi

DIRNAME=$(dirname "$0")

if [ ! -d "${DIRNAME}/audit" ]; then
    mkdir ${DIRNAME}/audit
fi
echo "" > ${DIRNAME}/audit/audit-output.json
yarn audit --json > ${DIRNAME}/../../audit/audit-output.json
yarn audit
exit 0
