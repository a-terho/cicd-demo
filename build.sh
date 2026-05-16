#!/bin/bash

echo "Installing dependencies and building frontend"
npm ci
npm ci --prefix backend
npm ci --prefix frontend
npm run build