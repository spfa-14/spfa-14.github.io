# SPFA

A blog generator.

## Usage

- spfa g (generate) generate files
- spfa s (server) build server on localhost:3000
- spfa i (init) initialize spfa

## libs

- file: for file operations
- check: check the SPFA.tag exist
- md2html: convert .md files to .html
- mkindex: make index.html


## the directories

/lib : for css and js

/post : for your post markdowns

/public : the html and style you will publish

/public/lib : a copy of /lib

/public/post : your posts in html form

## How to use

1. Go to the terminal
2. Enter **npm install spfa -g** (use **sudo** if necessary?)
3. Go to post (not the post inside the public folder)
4. make a Markdown file inside
5. Enter **spfa i**, **spfa g**, **spfa s**
6. Open your browser and go to **https://localhost:3000**
7. Go to the public folder and your file is the html one
8. You're done! (convenient, isn't it)

#### This page is made using SPFA!

Github: https://github.com/oi-14/spfa
