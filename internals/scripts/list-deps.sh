#!/bin/sh

grep "require('" *.js bin/ main/ renderer/ -R |
    grep '.js:' |
    sed "s/.*require('\([^'\/]*\).*/\1/" |
    grep -v '^\.' |
    sort |
    uniq
