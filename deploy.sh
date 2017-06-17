#!/bin/bash
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`

echo "${RED}🚮  Deleting old build...${RESET}"
rm -rf build/
echo "${GREEN}🐙  Pulling new UI from Github...${RESET}"
git clone https://github.com/robherley/robherley-ui.git
echo "${GREEN}📡  Downloading Dependencies from NPM and Building...${RESET}"
cd robherley-ui && npm install && npm run build
echo "${GREEN}♻️  Moving files and cleanup remaining files...${RESET}"
cd .. && mv robherley-ui/build/ build/
rm -rf robherley-ui/
echo "${GREEN}🚀  Pushing to Heroku...${RESET}"
git push heroku
echo "${GREEN}✅ ${RESET}"
