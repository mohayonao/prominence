# prominence
[![Build Status](http://img.shields.io/travis/mohayonao/prominence.svg?style=flat-square)](https://travis-ci.org/mohayonao/prominence)
[![NPM Version](http://img.shields.io/npm/v/prominence.svg?style=flat-square)](https://www.npmjs.org/package/prominence)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> Call a callback-based function as ES6 Promise

## Installation

### NPM

```
npm install prominence
```

## API

- `prominence(context: object, methodName: string, [ args: any[] ]): Promise<any>`

## Examples

ES6 Promise

```js
import fs from "fs";
import prominence from "prominence";

prominence(fs, "readFile", [ filepath, "utf-8" ]).then((text) => {
  console.log(text);
}).catch(console.error.bind(console));
```

ES7 Async/Await

```js
import fs from "fs";
import prominence from "prominence";

let example = async (filepath) => {
  let text = await prominence(fs, "readFile", [ filepath, "utf-8" ]);

  console.log(text);
};
```

## Contributing

1. [Fork it!](https://github.com/mohayonao/prominence/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](http://mohayonao.mit-license.org/)
