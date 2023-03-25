# NodeStringUtils

The NodeJavaScriptUtils module is a collection of functions for manipulating strings in TypeScript. It includes functions for trimming whitespace, converting case, counting characters, replacing substrings, extracting substrings, and padding strings with a specified character to a specified length.

## Installation

To use NodeJavaScriptUtils in your TypeScript project, you can install it from npm:

```sh
npm i node-string-utils@latest
```

## Usage

Import the NodeJavaScriptUtils module into your TypeScript or JavaScript code and use its functions as needed:

```js
import { StringUtils } from "node-javascript-utils";

const myString = "   Hello, world!   ";

const trimmedString = StringUtils.trim(myString);
// trimmedString === 'Hello, world!'

const replacedString = StringUtils.replace(myString, ["o", "e"], "a");
// replacedString === '   Hella, werld!   '

const paddedString = StringUtils.pad(myString, [20, "-"]);
// paddedString === '   Hello, world!   --'
```

## API

The NodeJavaScriptUtils module provides the following functions for manipulating strings:

`trim(str: string): string`

Removes whitespace from the beginning and end of a string.

`toUpper(str: string): string`

Converts a string to uppercase.

`toLower(str: string): string`

Converts a string to lowercase.

`countChars(str: string): number`

Counts the number of characters in a string.

`replace(str: string, replace: [string, string], withStr: string): string`

Replaces all occurrences of a substring in a string with another substring.

`substring(str: string, [start: number, end?: number]): string`

Extracts a substring from a string.

`pad(str: string, [length: number, padChar?: string]): string`

Pads a string with a specified character to a specified length.

## Contribute

If you find a bug or would like to suggest an enhancement, please open an issue on the GitHub repository. Pull requests are also welcome.

## LICENSE

The NodeJavaScriptUtils module is released under the MIT License. See [LICENSE](/LICENSE) for details.
