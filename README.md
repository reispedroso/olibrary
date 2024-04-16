# olibrary API

This is a simple project to manage a bookstore.

## Requirements

To run this project, you will need to have Node.js and MongoDB installed on your machine.

## Installation

#### - git clone https://github.com/reispedroso/olibrary.git

#### - cd olibrary

#### - npm install

## Configure environment variables

#### - Create a `.env` file in the project root and define the necessary environment variables.

## Use
#### To run the project
#### - npm start  

##### Access the API at `http://localhost:3000`.

### Routes

#### - `GET /getallbooks`: Returns all books.
#### - `POST /books`: Creates a new book. A JSON must be sent with the following fields: `name`, `description`, `image_url` and `author`.

