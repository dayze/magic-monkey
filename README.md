# Magic Monkey

## Documentation

Magic Monkey is a CSS library. You can check for the documentation at this address : http://www.magicmonkey.fr/

## Download

1. Get the Magic Monkey library on GitHub

2. Add the stylesheet where you wish in your Web project

3. Charge it in your HTML page like this : ( don't forget the meta tag ! )

````html
<head>
  ...
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href=".../path/to/magicmonkey.min.css" type="text/css">
  ...
</head>
````

## Install with NPM

Magic Monkey can be installed thanks to NPM ( https://www.npmjs.com/package/magic-monkey ) :

````bash
npm install magic-monkey --save
````

## Install with Bower

Magic Monkey can be installed thanks to Bower :

````bash
bower install magic-monkey
````

## Import with Webpack

You can import the stylesheet in your javascript file

#### ES6

````bash
import MagicMonkey from 'magic-monkey'
new MagicMonkey().load()
````

#### CommonJS

````bash
const MagicMonkey = require('magic-monkey')
new MagicMonkey().load()
````
   

## License

MIT