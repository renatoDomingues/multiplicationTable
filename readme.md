
# Project name multiplicationTable

## Install
````
* npm init
* yarn add express
* yarn add ejs
* yarn add --dev mocha
* yarn add --dev chai
* yarn add --dev sinon
* yarn --dev nyc ( yarn add --dev nyc )

````

## Package.json
´´´´
* "test": "echo \"Error: no test specified\" && exit 1"
* "start": "node index.js"
* "test": "./node_modules/.bin/mocha **/*.test.js --reporter spec"
* "coverage": "./node_modules/.bin/nyc mocha **/*.test.js --reporter spec",
´´´´

## Terminal
````
* node index.js
* npm start
* npm test
* npm run coverage
````