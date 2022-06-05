# ShareChess

This repo contains the source code for [sharechess.github.io](https://sharechess.github.io/).

![Screenshot](/public/img/preview/screenshot.png)

## About

[ShareChess](https://sharechess.github.io/) is a free, open source website that allows you to share chess games as self-contained replay links (the whole game is stored in the url without the need for a database), PNG images, or GIF / MP4 / WebM animations.

The website provides a high variety of chessboard and piece designs to serve as an open alternative for commercial chess GIF makers.

## Installation

Latest build is available on [github.com/sharechess/sharechess.github.io](https://github.com/sharechess/sharechess.github.io) and is ready to deploy on any hosting service (if you want to self-host the project).

For development:

- fork this repo and clone the fork to your local environment,
- go to the project's directory and run `npm i` (requires Node 16 LTS or higher, available [here](https://nodejs.org/en/)),
- run `npm start` - it will start the development server,
- start coding ;)

Preview of the current dev version is available here: [sharechess-dev.netlify.app](https://sharechess-dev.netlify.app)

## Designing new boards and piece sets

If you are an artist, or just like to create stuff, you can submit
a new board design or a piece set.

Static pieces:

- Preferred format: SVG (scalable vector graphics)
- Alternative format: PNG
- Size: 256x256px (SVG can have any size),
- Notes: Piece graphics should include the square whitespace,
- Example: [pieces](/public/pieces/magnetic_brown)

Animated pieces:

- Preferred format: APNG
- Alternative format: GIF
- Other requirement the same as static pieces.

Board design:

- Preferred format: JPG / PNG
- Size: 2048x2048px
- Notes: Optionally, you can include additional image of the same size for border / title screen.
- Example: [board](https://raw.githubusercontent.com/sharechess/sharechess/main/public/textures/leather01.jpg) | [title screen](https://raw.githubusercontent.com/sharechess/sharechess/main/public/textures/leather01_bg.jpg)

Credits and license:

- You should specify a CC license: [choose the license](https://creativecommons.org/choose/)
- If you want to be credited, please provide your name / nickname and an optional link to yur profile.

You can submit your work by opening a [issue](https://github.com/sharechess/sharechess/issues) or messaging me on [Reddit](https://www.reddit.com/message/compose/?to=kap89&subject=ShareChess%20design).

## Contributors

[![GitHub contributors](https://contrib.rocks/image?repo=sharechess/sharechess)](https://github.com/sharechess/sharechess/graphs/contributors)

## License

The project is under open [GNU GPL V3.0 license](/LICENSE.md).

Some of the assets are under separate licenses. Full list of credits, copyrights and licenses is located here: [CREDITS](/public/CREDITS.md).
