#!/bin/bash

echo "Installing dependencies and building frontend"
npm ci
npm ci --prefix client
npm run build