# adp-angularjs-exercise

## Instructions to run the project

### Installation
You can clone or download the project from this repository, then open a cmd console and navigate to the project folder and run the following command.

```
npm install
```

### Run the app

To run the app on your local, in the console run:

```
npm start
```

### Run the unit test (karma jasmin)

```
npm run test-single-run
```

### To run protractor e2e test 

Before starting Protractor, open a separate terminal window and run:

```
npm start
```

Since Protractor is built upon WebDriver, we need to ensure that it is installed and up-to-date 

```
npm run update-webdriver
```

Once you have ensured that the development web server hosting our application is up and running, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```



