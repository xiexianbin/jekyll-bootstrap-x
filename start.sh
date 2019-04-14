#!/bin.sh

git pull

ps -aux | grep "jekyll" | grep -v "grep" | awk '{print $2}' | while read line;  
do  
    kill -9 $line  
done

rm -rf _site

> website.log

bundle exec jekyll serve --watch --incremental --port 8080 --host 0.0.0.0 >> website.log &

