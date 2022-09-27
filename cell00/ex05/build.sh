#!/bin/bash
if [ -z $1 ]
then
	echo "Enter at least one arguments please..."
fi

for x in $@
do
	mkdir ex$x
done
