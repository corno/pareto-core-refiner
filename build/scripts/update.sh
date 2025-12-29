#!/usr/bin/env bash

scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."

node $scriptDir/../node_modules/npm-updatedependencies2latest/dist/index.js $rootDir/pub dependencies && \

npm update --prefix "$rootDir/pub"