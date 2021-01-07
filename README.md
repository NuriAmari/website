This repository contains the source for my personal website accross two iterations. The existing version stored in the master branch is available at [nuriamari.com](https://nuriamari.com). I am actively rewriting the site from scratch and a tentative version is available at [nuriamari.dev](https://nuriamari.dev). The client side source for the new website can be found in the [rewrite branch](https://github.com/NuriAmari/website/tree/rewrite).

## Site Rewrite

I have rewritten the site to explore some new topics and expand upon the functionality offered by the first website. The client side component is written in [Typescript](https://www.typescriptlang.org/) using [React](https://reactjs.org/) and [SASS](https://sass-lang.com/). The site is transpiled and bundled using [webpack](https://webpack.js.org/) and served by an [NGINX](https://www.nginx.com/) server I maintain on an AWS EC2 instance. Read more about how the site is hosted and supported on the server side [here](https://github.com/NuriAmari/website-server).

## Features

I enjoy using my website as a place to house small experiments and projects of mine. I have a few more planned, but currently the notable features of the site are as follows:

### Terminal Emulator

Included in my site is a bash-like shell allowing the user to control the site through a command line interface. Contents of the terminal can be editing as one would expect (left, right arrow keys, backspace etc) and previously used commands can be iterated with up and down arrow keys. Time permitting, I plan to add tab completion.

[![terminal.gif](https://i.postimg.cc/650vSLLJ/terminal.gif)](https://postimg.cc/w71MRNG0)

### ASCII-GIF

The new site's homepage features an animation of a spinning globe created using the characters 0,1,_ and occasionally components of my name. The effect is created by breaking an gif into individual frames and converting the image into ASCII characters on the fly. To achieve this I have built upon, yet leaned heavily on the library [Lettercrap](https://github.com/nate-parrott/lettercrap) by Nate Parrott.

[![globe.gif](https://i.postimg.cc/5NnVD6Xk/globe.gif)](https://postimg.cc/ZCB2dYFr)

### Chess

Included in the site is a chess board enabling visitors to my site to collectively engage in a game against me. Vistors play white together and I play black. If at any point white makes a move, I receive an email and know to respond. I am able to respond on the site itself, authenitcating using credentials initially and cookies thereafter. A history of the moves in the current game and an all time scoreboard is maintained and displayed to the users. Once a game ends, another begins automatically. Moves are validated both client side and server side and board state is communicated using websockets. More information on the server side can be found [here](https://github.com/NuriAmari/website-server). 

[![chess.gif](https://i.postimg.cc/jS8KGCFS/chess.gif)](https://postimg.cc/zyR9hDNs)
