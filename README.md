# DV1483 project: a wordl-esque game

This project is created to finish my grade for DV1483 at BTH.

## Running it

Build the docker image: `$ docker build -t termly .`

Run the image (with a source mount): `$ docker run --rm -d -v $(pwd):/app/ -p 8080:8080 --name termly termly`

## The setup
I decided to build a Vue based application and after having worked with laravel recently, I thought vite would be a nice tool for building assets and serving the dev environment.

I put all of this inside of a docker image based on the node 19 + alpine 3.17 image. Which has most of the tools I wanted and needed, pre-installed.
