#!/bin/bash
echo "$1"
cd /app
npm install
cd /app
node server.js $1