Boilerplate to create a cumulocity ui plugin

- Get the plugin boilerplate here: https://bitbucket.org/m2m/cumulocity-ui-plugin
- Run *npm install*
- Configure the *cumulocity.json* for application
- Register application: *grunt appRegister*
- Configure the *cumulocity.json* for plugin
- Register plugin: *grunt pluginRegister:<pluginName>*
- Run local server: *grunt server*
- Open in browser: *http://localhost:8000/apps/<appname>*
- Code your plugin. Iterate.
- Build your plugin: *grunt build*
- Make sure to re-register if you make changes to manifests: *grunt appRegister*, *grunt pluginRegisterAll*