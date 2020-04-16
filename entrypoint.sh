#!/bin/bash
echo "$1" "$2"
cd /app
npm install
cd /app
node server.js $1 $2