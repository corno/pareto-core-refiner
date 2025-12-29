#!/usr/bin/env bash

scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."

rm -rf "$rootDir/pub/dist" && \
pushd "$rootDir/pub" > /dev/null && \
tsc && \
popd > /dev/null