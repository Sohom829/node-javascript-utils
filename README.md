# NodeJavaScript

The NodeJavaScriptUtils module is a collection of functions for manipulating strings, arrays, dates, colors, objects, errors, maths in TypeScript and JavaScript.

## Installation

To use NodeJavaScriptUtils in your TypeScript or JavaScript project, you can install it from npm:

```sh
npm i node-javascript-utils@latest
```

## Usage (Strings)

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

## Usage (Arrays)

```js
const { ArrayUtils, SortDirection } = require("node-javascript-utils");

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const arrayUtils = new ArrayUtils(people);

// Sort the array by age in descending order
arrayUtils.sortBy("age", SortDirection.Descending);

// Filter the array to only include people older than 30
const filteredArray = arrayUtils.filter((person) => person.age > 30);

// Map the array to an array of strings that only contain the person's name
const mappedArray = arrayUtils.map((person) => person.name);
```

## Usage (CustomError)

```js
const { CustomError } = require("node-javascript-utils");

class AnError extends CustomError() {
  constructor(...message) {
    // I'm using spread operator, you can also deny it.
    super(message.join(" "));
    this.name = "AnError"; // Error Name
  }
}

throw new AnError("Just", "A", "Random", "Error");
```

## Usage (DateUtils)

```js
const {
  DateUtils,
  DateUnits,
  DateUnitValue,
  DateFormat,
} = require("node-javascript-utils");

// Add 2 weeks to a date
const originalDate = new Date("2023-03-26");
const twoWeeksLater = DateUtils.add(originalDate, DateUnits.WEEK, 2);
console.log(`Two weeks later: ${twoWeeksLater}`);

// Get the difference in months between two dates
const date1 = new Date("2023-01-01");
const date2 = new Date("2023-03-01");
const monthsDiff = DateUtils.difference(date1, date2, DateUnits.MONTH);
console.log(`Months difference: ${monthsDiff}`);

// Parse a date string and format it
const dateString = "2023-03-26T10:30:00Z";
const parsedDate = DateUtils.parse(dateString);
const formattedDate = DateUtils.format(parsedDate, DateFormat.MM_dd_yyyy);
console.log(`Formatted date: ${formattedDate}`);

// Use the DateUnitValue interface to pass a unit and value together
const date = new Date("2023-03-26");
const twoYearsAgo = DateUtils.add(date, { unit: DateUnits.YEAR, value: -2 });
console.log(`Two years ago: ${twoYearsAgo}`);
```

## Usage (MathUtils)

```js
const { MathUtils } = require("node-javascript-utils");

const math = new MathUtils();

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
console.log(math.multiply(2, 3)); // 6
console.log(math.divide(6, 3)); // 2
```

## Usage (ObjectUtils)

```js
const { ObjectUtils } = require("node-javascript-utils");

const objUtils = new ObjectUtils();

// deepClone
const obj1 = { foo: "bar", baz: { hello: "world" } };
const obj2 = objUtils.deepClone(obj1);
console.log(obj1 === obj2); // false
console.log(obj1.baz === obj2.baz); // false

// merge
const obj3 = { foo: "bar", baz: { hello: "world" } };
const obj4 = { baz: { world: "hello" } };
const obj5 = objUtils.merge(obj3, obj4);
console.log(obj5); // { foo: 'bar', baz: { hello: 'world', world: 'hello' } }

// isEqual
const obj6 = { foo: "bar", baz: { hello: "world" } };
const obj7 = { foo: "bar", baz: { hello: "world" } };
console.log(objUtils.isEqual(obj6, obj7)); // true

// toArray
const obj8 = { foo: "bar", baz: { hello: "world" } };
const arr1 = objUtils.toArray(obj8);
console.log(arr1); // [ 'bar', { hello: 'world' } ]

// flatten
const obj9 = { foo: { bar: { baz: "hello" } }, world: "world" };
const obj10 = objUtils.flatten(obj9);
console.log(obj10); // { 'foo.bar.baz': 'hello', world: 'world' }
```

## Usage (ColorUtils)

```js
const { parseColor, formatColor } = require("node-javascript-utils");

const color = parseColor("#FF0000"); // { r: 255, g: 0, b: 0, a: 1 }

const color = { r: 255, g: 0, b: 0, a: 0.5 };
const hexColor = formatColor(color); // "#FF000080"
const rgbColor = formatColor(color, ColorFormat.RGB); // "rgb(255, 0, 0)"
```

## Usage (ChalkUtils) - 3rd Party Library Utils

```js
const chalk = require("chalk"); // CommonJS Chalk use import syntax for ModernJS
const { colors } = require("node-javascript-utils");
const PowderBlue = chalk.hex(colors.PowderBlue);

console.log(PowderBlue("Hello, World!")); // PowderBlue color
```

## API (String)

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

## API (Arrays)

`sortBy(prop: keyof T, direction: SortDirection = SortDirection.Ascending): void:`

This method sorts the array in the specified direction based on the given property. It takes two parameters: prop, which is the property to sort by, and direction, which is the direction to sort in (ascending or descending). If direction is not provided, it defaults to SortDirection.Ascending. This method throws an ArrayUtilsError if the array is not an array of objects or if the specified property does not exist on the objects in the array.

`filter(predicate: (item: T) => boolean): T[]:`

This method filters the array based on the given predicate function. It takes one parameter: predicate, which is the function used to filter the array. This method throws an ArrayUtilsError if the array is not an array of objects or if the predicate function does not return a boolean.

`map<R>(mapper: (item: T) => R): R[]:`

This method maps the array based on the given mapping function. It takes one parameter: mapper, which is the function used to map the array. This method throws an ArrayUtilsError if the array is not an array of objects or if the mapper function does not return a value of the expected type.

## API (CustomError)

`CustomError`

This class is a base class to create error. It has message, stack, code, status, name to edit. You can create an advanced error message with it.

## API (DateUtils)

`add(date: Date, unit: DateUnits, value: number): Date`

Adds a number of units to a date.

- `date`: A Date object to which the units will be added.
- `unit`: A member of the DateUnits enum that represents the unit to be added.
- `value`: A number that represents the value of the unit to be added.

Returns a new Date object that represents the result of the addition.

Throws a `DateUtilsTypeError` if the date parameter is not a valid Date object, or if the value parameter is not an integer.

Throws a `DateUtilsError` if the unit parameter is not a member of the DateUnits enum.

`difference(date1: Date, date2: Date, unit: DateUnits): number`

Calculates the difference between two dates in a specific unit.

- `date1`: The first Date object.
- `date2`: The second Date object.
- `unit`: A member of the DateUnits enum that represents the unit in which the difference will be calculated.

Returns a number that represents the difference between the two dates in the specified unit.

Throws a `DateUtilsTypeError` if either date1 or date2 parameters are not valid Date objects.

Throws a `DateUtilsError` if the unit parameter is not a member of the DateUnits enum.

`parse(dateString: string): Date`

Parses a date string and returns a Date object.

- `dateString`: A string that represents a date.

Returns a Date object that represents the parsed date.

Throws a `DateUtilsError` if the dateString parameter is not a valid date string.

`format(date: Date, format: DateFormat): string`

Formats a Date object according to a format string.

- `date`: A Date object to be formatted.
- `format`: A string that represents the format to be used.

Returns a string that represents the formatted date.

Throws a `DateUtilsTypeError` if the date parameter is not a valid Date object.

## API (MathUtils)

### Error Codes:

The `MathUtilsError` class includes an code property that can be used to identify specific errors. The available error codes are:

- `INVALID_ARGUMENTS`: The arguments passed to the method are invalid.
- `DIVIDE_BY_ZERO`: An attempt was made to divide by zero.

## API (ColorUtils)

`parseColor(color: Color): RGBAColor`

This function takes a color value in one of the supported formats and returns an object representing the color as an RGBAColor.

Supported formats are:

- A string in the format #RRGGBB or #RRGGBBAA, where RR, GG, BB, and AA are hexadecimal values for the red, green, blue, and alpha components of the color, respectively.
- A string in the format rgb(R, G, B) or rgba(R, G, B, A), where R, G, B, and A are decimal values for the red, green, blue, and alpha components of the color, respectively.
- An object with r, g, b, and optionally a properties, where r, g, and b are numbers representing the red, green, and blue components of the color, respectively, and a is an optional number representing the alpha component of the color (default is 1).

## Contribute

If you find a bug or would like to suggest an enhancement, please open an issue on the GitHub repository. Pull requests are also welcome.

## LICENSE

The NodeJavaScriptUtils module is released under the MIT License. See [LICENSE](/LICENSE) for details.
