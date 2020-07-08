Each branch is a step in the walkthrough. `git checkout one` to get started.

##one
Restructure the app to see the pain point of a long chain of `../`

##two
Add src paths to `jsconfig.json`

##three
Add node import resolver to `.eslintrc.js`

#four - Babel
In order to compile correctly, Babel needs to know about the module path.
- `npm install --save-dev babel-plugin-module-resolver`
- Add module resolver to babel.config.json

#five - Jest
In order to compile correctly, Jest needs some additional configs and additional Babel plugin and configs.
- `npm install --save-dev babel-plugin-transform-export-extensions`
- Add module path to jest.config.js
- Add additional configs to babel.config.json