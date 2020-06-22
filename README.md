# Project Name

This component displays header images.

## Related Projects

  - https://github.com/Relax-ly/reviews-service
  - https://github.com/Relax-ly/reservation-services
  - https://github.com/Relax-ly/related-homes


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This component displays images from the property listing and is ment to be paired with other components from Relaxly project.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB

## Development

Mongo DB is require.

A docker image is also avalible:

```sh
docker pull pteerawatt/header-images_header:header3
```

### Installing Dependencies

From within the root directory:

```sh
npm install
```

start nodemon

```sh
npm run start
```

start webpack

```sh
npm run build
```

to seed the data base

```sh
npm run seed
```
App is served at http://localhost:2555/

