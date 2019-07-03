## About

Uke box is a fun project to utilise the Web Audio API to create a Ukulele tuner.

## Running this project

This project utilises Docker to run and deploy the application. Although you can also run it outside a Docker container - using commands found in the `package.json` file - please follow the directions below on getting started:

### Install the dependencies

After cloning the project, from the root directory, install your dependencies by running `npm install` from the command line. This will need to be done for each directory: `backend` and `frontend`.

You will need to open two separate terminal windows to run the projects:

### Start the apps

`npm run start` for `backend`
`npm run serve` for `frontend`

### Running this project via Docker

Docker can be downloaded after signing up for an account: https://hub.docker.com

Docker provides the download instructions, so please follow their directions on how to get setup. By Downloading Docker Desktop, you will get Docker Compose so that you can run the following commands.

After installing docker and running Docker Desktop, you should be able to run `docker-compose up` from the root directory of the project. This will down images and start the various apps in this project.

You can go to `uke-box.localhost` in your browser and access the frontend of the application
