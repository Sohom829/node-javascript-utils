enum DateUnits {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

type DateFormat =
  | "yyyy-MM-dd"
  | "MM/dd/yyyy"
  | "dd.MM.yyyy"
  | "MM-dd-yyyy"
  | "yyyy/MM/dd"
  | "dd/MM/yyyy"
  | "yyyy.MM.dd"
  | "dd-MMM-yyyy"
  | "dd/MMM/yyyy";

interface DateUnitValue {
  unit: DateUnits;
  value: number;
}

class DateUtilsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DateUtilsError";
  }
}

class DateUtilsTypeError extends TypeError {
  constructor(message: string) {
    super(message);
    this.name = "DateUtilsTypeError";
  }
}

class DateUtils {
  static add(date: Date, unit: DateUnits, value: number): Date {
    if (!(date instanceof Date)) {
      throw new DateUtilsTypeError("Invalid date object");
    }

    if (!Object.values(DateUnits).includes(unit)) {
      throw new DateUtilsTypeError(`Invalid date unit: ${unit}`);
    }

    if (!Number.isInteger(value)) {
      throw new DateUtilsTypeError(`Invalid value: ${value}`);
    }

    let newDate = new Date(date.getTime());
    switch (unit) {
      case DateUnits.DAY:
        newDate.setDate(newDate.getDate() + value);
        break;
      case DateUnits.WEEK:
        newDate.setDate(newDate.getDate() + 7 * value);
        break;
      case DateUnits.MONTH:
        newDate.setMonth(newDate.getMonth() + value);
        break;
      case DateUnits.YEAR:
        newDate.setFullYear(newDate.getFullYear() + value);
        break;
      default:
        throw new DateUtilsError(`Unsupported date unit: ${unit}`);
    }
    return newDate;
  }

  static difference(date1: Date, date2: Date, unit: DateUnits): number {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new DateUtilsTypeError("Invalid date object");
    }

    if (!Object.values(DateUnits).includes(unit)) {
      throw new DateUtilsTypeError(`Invalid date unit: ${unit}`);
    }

    let timeDiff = Math.abs(date1.getTime() - date2.getTime());
    let diffValue;
    switch (unit) {
      case DateUnits.DAY:
        diffValue = timeDiff / (1000 * 60 * 60 * 24);
        break;
      case DateUnits.WEEK:
        diffValue = timeDiff / (1000 * 60 * 60 * 24 * 7);
        break;
      case DateUnits.MONTH:
        diffValue =
          (date1.getFullYear() - date2.getFullYear()) * 12 +
          (date1.getMonth() - date2.getMonth());
        break;
      case DateUnits.YEAR:
        diffValue = date1.getFullYear() - date2.getFullYear();
        break;
      default:
        throw new DateUtilsError(`Unsupported date unit: ${unit}`);
    }
    return Math.floor(diffValue);
  }

  static parse(dateString: string): Date {
    let parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
      throw new DateUtilsError("Invalid date string");
    }
    return parsedDate;
  }

  static format(date: Date, format: DateFormat): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new DateUtilsTypeError("Invalid date passed to DateUtils.format");
    }

    let formattedDate = "";
    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      switch (char) {
        case "YYYY":
          formattedDate += date.getFullYear().toString();
          break;
        case "MM":
          formattedDate += (date.getMonth() + 1).toString().padStart(2, "0");
          break;
        case "DD":
          formattedDate += date.getDate().toString().padStart(2, "0");
          break;
        case "hh":
          formattedDate += date.getHours().toString().padStart(2, "0");
          break;
        case "mm":
          formattedDate += date.getMinutes().toString().padStart(2, "0");
          break;
        case "ss":
          formattedDate += date.getSeconds().toString().padStart(2, "0");
          break;
        default:
          formattedDate += char;
          break;
      }
    }
    return formattedDate;
  }
}

export { DateUtils, DateFormat, DateUnitValue };
