# E-commerce Back End
![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
E-Commerce back end is a server-side API that allows users to create, read, update, and delete products, Categories, and tags.

## Table of Contents
- [E-commerce Back End](#e-commerce-back-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Walkthrough](#walkthrough)
  - [Screeshots](#screeshots)
  - [ENV](#env)
  - [Installation](#installation)
  - [Running the app](#running-the-app)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)

## Usage 
After installing the dependencies, run the following command to start the server: `npm start`.  
Connect with Insomnia or Postman to test the API.  
Endpoints:  
`http://localhost:3001/api/products` and `/products/id` GET, POST, PUT, DELETE
`http://localhost:3001/api/categories` and `/categories/id` GET, POST, PUT, DELETE
`http://localhost:3001/api/tags` and `/tags/id` GET, POST, PUT, DELETE

## Walkthrough
[Walkthrough Video](https://drive.google.com/file/d/1tgfQ60g5Ip_tGVJqY1DkCiJuKwcAJq5f/view)  


## Screeshots
![screenshot](/img/product.png)
![screenshot](/img/product_by_id.png)
![screenshot](/img/category.png)
![screenshot](/img/delete_category.png)

## ENV
.env file example:
```
DB_NAME="database name"
DB_USER="db user"
DB_PW="password"
```
  
## Installation
```
git clone git@github.com:jimenezraul/my-e-commerce-backend.git
cd my-e-commerce-backend
npm i
npm run seed
```

## Running the app
```
npm start
```

## Contributing
Raul

## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen)
This application is covered by the MIT license.

## Questions
Contact me by email or find me on github.  
GitHub: [jimenezraul](https://github.com/jimenezraul)  
Email: jimenezraul1981@gmail.com
