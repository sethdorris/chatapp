# Chat Application

This application was built using the following technology:

* NodeJS
* ExpressJS
* ReactJS
* Redux
* ES2015 and Beyond (used Stage3 Async/Await syntax) eg:
```js
    async wsConnect() {
        return await ws.connect();
    }
```
* Babel
* Browserify
* Gulp

You can use this application by cloning the repo and in the terminal from the project root run

`npm install`

If you make any changes to the code you will need to transpile the code into build format again by running the default gulp task, by typing

`gulp`

in the project root in terminal.


To serve the application change directory to

`build/server`

and run

`node server.js`.

#####Things left to do:
* Client side username verification (ensure no duplicate usernames)
* Client side UI loader when clicking the connect button
* Clean up the styling for the main chat component
* Create multiple channels
* Create user roles
* Create client commands
* Refactor Server.js into modules for handling message actions
* Refactor Server side storage of connected users from an Array to an Object
