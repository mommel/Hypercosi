#!/bin/sh
set -e

git pull
git diff --exit-code
rm -rf node_modules/
yarn install
yarn dedupe
yarn test
