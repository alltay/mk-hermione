## Css regression testing with Hermione

[Hermione](https://github.com/gemini-testing/hermione) раge

- Download [selenium server](http://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.0.jar)
- Download [Browser Drivers](https://www.seleniumhq.org/download/) and put in to the same folder with selenium server (Windows)
- Run by
`java -jar selenium-server-standalone-3.141.0.jar`
- Install Hermione by 
`npm install hermione chai`
- Install [html-reporter](https://github.com/gemini-testing/html-reporter)
- Put *.hermione.conf.js* in *node_modules/.bin/hermione*
- Run tests by `hermione` or `hermione gui`