enum SortDirection {
  Ascending = "asc",
  Descending = "desc",
}

interface Person {
  name: string;
  age: number;
}

class ArrayUtilsError extends Error {
  constructor(...message: any[]) {
    super(message.join(" "));
    this.name = "ArrayUtilsError";
  }
}

class ArrayUtils<T> {
  private items: T[] | null | any;

  constructor(items: T[]) {
    this.items = items;
  }

  /**
   * Sorts the array in the specified direction based on the given property.
   *
   * @param prop The property to sort by.
   * @param direction The direction to sort in (ascending or descending).
   * @throws {Error} If the array is not an array of objects or if the specified property does not exist on the objects in the array.
   */
  sortBy(
    prop: keyof T,
    direction: SortDirection = SortDirection.Ascending
  ): void {
    if (this.items === null) {
      throw new ArrayUtilsError("Array is null");
    }
    if (
      !Array.isArray(this.items) ||
      typeof this.items[0] !== "object" || // Check if first item is an object
      !(prop in this.items[0]) // Use parentheses to avoid operator precedence issue
    ) {
      throw new ArrayUtilsError(
        "Array is not an array of objects or property does not exist on objects in array."
      );
    }

    this.items.sort((a, b) => {
      const valueA = a && a[prop];
      const valueB = b && b[prop];

      if (valueA < valueB) {
        return direction === SortDirection.Ascending ? -1 : 1;
      } else if (valueA > valueB) {
        return direction === SortDirection.Ascending ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  /**
   * Filters the array based on the given predicate function.
   *
   * @param predicate The function used to filter the array.
   * @throws {Error} If the array is not an array of objects or if the predicate function does not return a boolean.
   */
  filter(predicate: (item: T) => boolean): T[] {
    if (
      !Array.isArray(this.items) ||
      typeof this.items[0] !== "object" || // Check if first item is an object
      typeof predicate !== "function"
    ) {
      throw new ArrayUtilsError(
        "Array is not an array of objects or predicate is not a function."
      );
    }

    return this.items.filter(predicate);
  }

  /**
   * Maps the array based on the given mapping function.
   *
   * @param mapper The function used to map the array.
   * @throws {Error} If the array is not an array of objects or if the mapper function does not return a value of the expected type.
   */
  map<R>(mapper: (item: T) => R): R[] {
    if (
      !Array.isArray(this.items) ||
      typeof this.items[0] !== "object" || // Check if first item is an object
      typeof mapper !== "function"
    ) {
      throw new ArrayUtilsError(
        "Array is not an array of objects or mapper is not a function."
      );
    }

    return this.items.map(mapper);
  }
}

export { ArrayUtils, SortDirection, Person };
