# PLAYING with NodeJS
## Doing my first install alone

### Steps installing NodeJS
* Create your directory --> For this example: **Temp_Nodejs**
* Enter in this directory and then...

### How to install & run express under NodeJS
```shell
1. $ npm install express-generator -g
2. $ express --h
3. $ express --view=ejs nodeapi
4. $ cd nodeapi
5. $ npm install
6. $ npm start
```

### Install this line into the package.json file under file:
*"start": "node ./bin/www",*
```shell
    "dev": "cross-env PORT=3000 DEBUG=nodeapi:* nodemon"
```
> For entering in development mode: 
```shell
$ nodemon
```

### Start your favorite browser with:
http://localhost:3000/

### Install other dependencies, in this case:
```shell
$ npm install body-parser
$ npm install connect-multiparty
$ npm install mongoose
$ npm install nodemon
$ npm install cross-env
```

