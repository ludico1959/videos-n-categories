# Rocketseat #code/drops 113 🎥🎞

This is a CRUD with Node.JS, Express, TypeORM and PostgreSQL about videos/films and their categories. 

For more information, [click here](https://www.youtube.com/watch?v=9AO2hZJsHrs).

## 💾 Resources 

- Node.JS v14.17.6;
- Node Third Party Modules:
  - Express.Js v4.17.1,
  - pg v8.7.1,
  - reflect-metadata v0.1.13,
  - uuid v8.3.2 version 4 (random),
  - typescript v4.5.4 (devDependencie); 
  - ts-node-dev v1.1.8 (devDependencie); 
- JSON data (for sending and returning data);
- Postman v8.12.5 (for testing endpoits);
- Docker Desktop v20.10.11.

## 💻 Run locally

If you want to run the project on your local machine, just follow the steps below:

### 1️⃣ Starting...

To get started, you simply need to clone the project repository on your machine and install the dependencies.

```
  git clone https://github.com/ludico1959/rocketseat-codedrops-113
```

### 2️⃣ Requirements

Before installing the dependencies from the project, you need to have already installed on your machine:

* **Node.Js**: If you don't have it, just download [here](https://nodejs.org/en/download/).
* **Docker**: If you don't have it, just download [here](https://docs.docker.com/get-docker/).*


### 3️⃣ Setting a Docker container with PostgreSQL database 

We will use a Docker container to create a PostgreSQL database. For that, you first need open command-line interpreter (here I am using Git Bash) and seach for the root folder and type the following command to get the postgres official image and set the container's settings:
```
  docker-compose up -d
```
After that, just type to see the container's ID. 
```
  docker-compose up -d
```
Now type the command below, just changing the placeholder %ID% for the ID of the container.
```
  winpty docker exec -it %ID% bash
```
For openning the PostgreSQL with the following line:
```
  psql -U postgres
```
And create a database and connect to it using the commands below, but before, just change the placeholder %DATABASENAME% for your database name (mine was called **code_drops_crud**):
```
  create database %DATABASENAME%
```
```
\c code_drops_crud
```


### 4️⃣ Setting the environment variables

You have a file called **.env.example** in the root folder. There, you just need to set the environment variables as you like and change it's name to **.env**.


### 5️⃣ Instaling dependencies

Open cmd.exe (if you are using Windows) or another command-line interpreter and enter the path of your project. Then just type the following instruction: 

```
npm install
```

By typing the statement above, it will automatically download all the dependencies listed in the package.json file inside the folder **node_modules**:


### 6️⃣ Running the application

Well, now on the same cmd.exe screen (or another command-line interpreter), just start the server for the project to run locally typing:

```
yarn dev
```

## 📮 Testing endpoints

You can test the CRUD operations using an API test tool like Postman or Insomnia! Just import the file named is **postman_collection.json**.

* **Postman**: If you don't have it, just download it [here](https://www.postman.com/downloads/). 
* **Insomnia**: If you don't have it, just download it [here](https://insomnia.rest/download/).
