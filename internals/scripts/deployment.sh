#!/bin/bash
if [ $(git rev-parse --show-toplevel) != $(pwd) ]; then
  echo "Cannot locate project root"
  echo " FOLDER: ${PWD} seems to be wrong"
  exit 2
fi

ENV=$(echo "development staging production" | ipt -s " "| xargs echo)
VERSIONCHANGE=$(echo "patch minor major none" | ipt -s " "| xargs echo)
if [ "${ENV}" == "development" ]; then
    echo "That environment is not yet supported for deployment"
    exit 0
fi

echo "╔═════════════╗"
echo "║ PULLING GIT ║"
echo "╚═════════════╝"
git pull
git diff --exit-code
echo "╔════════════════════════╗"
echo "║ REMOVING EXISTING DEPS ║"
echo "╚════════════════════════╝"
rm -rf node_modules/
echo "╔═════════════════╗"
echo "║ INSTALLING DEPS ║"
echo "╚═════════════════╝"
yarn install
echo "╔═════════════════╗"
echo "║ STARTING DEDUPE ║"
echo "╚═════════════════╝"
yarn dedupe
echo "╔═══════════════╗"
echo "║ RUNNING TESTS ║"
echo "╚═══════════════╝"
yarn test
VERSION=$(node -pe "require('./package.json').version")
PRODUCT=$(node -pe "require('./package.json').productName")
BRANCH=$(git rev-parse --abbrev-ref HEAD)
BRANCHMATCH=$(echo ${BRANCH} | awk '/^v{1}[[:digit:]]{1,}.{1}[[:digit:]]{1,}.{1}[[:digit:]]{1,}-{0,1}[[:digit:]]{0,}$/{print $0}')
echo "█████████████████████████████████████████████████████████"
echo "█"
echo "█ PRODUCT: ${PRODUCT}"
echo "█ VERSION: ${VERSION}"
echo "█ BRANCH: $BRANCH"

if [ "${VERSIONCHANGE}" != "NONE" ]; then
    if [ "${ENV}" == "production" ]; then
        if [ "${BRANCH}" != "master" ]; then
            echo " ${BRANCH} is not valid to be released"
            exit 1
        fi
        yarn version --${VERSIONCHANGE}
    elif [ "${ENV}" == "staging" ]; then
        if [ "${BRANCH}" != "${BRANCHMATCH}" ]; then
            echo " ${BRANCH} is not valid to be prereleased"
            exit 1
        fi
        yarn version --pre${VERSIONCHANGE} --no-git-tag-version
    fi
    echo "█ INCREASE VERSION BY: ${VERSIONCHANGE}"
    VERSION=$(node -pe "require('./package.json').version")
    echo "█ New Version: ${VERSION}"
else
    if [ "${ENV}" == "production" ]; then
        if [ "${BRANCH}" != "master" ]; then
            echo " ${BRANCH} is not valid to be released"
            exit 1
        fi
    elif  [ "${ENV}" == "staging" ]; then
        if [ "${BRANCH}" != "${BRANCHMATCH}" ]; then
            echo " ${BRANCH} is not valid to be prereleased"
            exit 1
        fi
    fi
fi
echo "█"
echo "█████████████████████████████████████████████████████████"
yarn package-all
git diff --exit-code
echo "╔═════════════════╗"
echo "║ SIGNING PACKAGE ║"
echo "╚═════════════════╝"
yarn run package -- --sign
echo "╔════════════════╗"
echo "║ PUSHING TO GIT ║"
echo "╚════════════════╝"
git push
echo "╔══════════════╗"
echo "║ PUSHING TAGS ║"
echo "╚══════════════╝"
git push --tags
echo "╔════════════════════╗"
echo "║ START PUBLISH TASK ║"
echo "╚════════════════════╝"
yarn publish
echo "╔════════════════╗"
echo "║ RUN GH-RELEASE ║"
echo "╚════════════════╝"
./node_modules/.bin/gh-release
