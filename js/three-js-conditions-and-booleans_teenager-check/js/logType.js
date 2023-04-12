let data = [10];

switch (data) {
  case "undefined":
    if (data === undefined) {
      console.log("undefined!");
    } else if (data === null) {
      console.log("null!");
    }
    console.log("undefined!");
    break;
  case "null":
    if (data === null) {
      console.log("null!");
    } else if (data === undefined) {
      console.log("undefined!");
    }
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("NaN!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    }
    console.log("number!");
    break;
  case "not a number":
    if (Number.isNaN(data)) {
      console.log("NaN!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    }
    console.log("not a number!");
    break;
  case "string":
    if (data === "") {
      console.log("empty string!");
    } else if (Array.isArray(data)) {
      console.log("array!");
    }
    console.log("string!");
    break;
  case "boolean":
    if (data === true) {
      console.log("true!");
    }
    if (data === false) {
      console.log("false!");
    }
    // console.log("boolean!");
    break;
  case "BigInt":
    if (data === 10n) {
      console.log("10n!");
    }
    console.log("BigInt!");
    break;
  case "function":
    if (typeof data === "function") {
      console.log("function!");
    }
    console.log("function!");
    break;
  case "object":
    if (data === null) {
      console.log(data, "null");
    } else if (Array.isArray(data)) {
      console.log(data, "array!");
    } else {
      console.log(data, " object!");
    }
    console.log("object!");
    break;
  case "array":
    if (Array.isArray(data)) {
      console.log("array!");
    }
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");

    console.log("Data is: ", data, "\t Type is: ", typeof data);
}

// Array.isArray(arr);

// Array.isArray(obj);
