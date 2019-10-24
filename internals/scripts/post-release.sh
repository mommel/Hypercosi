#!/bin/sh
set -e

git diff --exit-code
yarn run package -- --sign
git push
git push --tags
yarn publish
./node_modules/.bin/gh-release
