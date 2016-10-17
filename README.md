Boilerplate to create a cumulocity ui plugin

- Make sure you have node.js >6.7 installed
- Install the Cumulocity CLI globally: ```npm i http://resources.cumulocity.com/webapps/node-tools/c8y-2.0.0-SNAPSHOT.tar -g```
- Get the plugin boilerplate here: *https://bitbucket.org/m2m/cumulocity-ui-plugin*
- Run ```npm install```
- Configure the **cumulocity.json** for application *(Select an application name unique in your tenant)*
- Configure the **cumulocity.json** for plugin *(optional)*
- Create the application on your tenant: ```c8y deploy:app <appname>```
- Run local development server: *c8y server*
- Open in browser: *http://localhost:9000/apps/<appname>*
- Code your plugin. Iterate.
- Run ```c8y deploy:app <appname>``` every time you want to update the app in production
