#!/bin/bash

if [ -z ${CLOUD_HOME+x} ]; then
	echo "CLOUD_HOME not set"
	exit 1
fi

cat *.js > $CLOUD_HOME/main.js