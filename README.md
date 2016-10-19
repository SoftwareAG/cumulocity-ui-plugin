Boilerplate to create a Cumulocity UI plugin

- Make sure you have node.js >6.7 installed
- Install the Cumulocity CLI globally: ```npm i cumulocity-tools -g```
- Clone or download [`cumulocity-ui-plugin`](https://bitbucket.org/m2m/cumulocity-ui-plugin) repository
- Run ```c8y install latest```
- Configure the **cumulocity.json** for application *(Select an application name unique in your tenant)*
- Configure the **cumulocity.json** for plugin *(optional)*
- Create the application on your tenant: ```c8y deploy:app <appname>```
- Run local development server: *c8y server*
- Open in browser: *http://localhost:9000/apps/<appname>*
- Code your plugin. Iterate.
- Run ```c8y deploy:app <appname>``` every time you want to update the app in production
