"use strict";

class Prominence {
  constructor(context) {
    let methods = {};

    for (let x = context; x != null; x = Object.getPrototypeOf(x)) {
      Object.getOwnPropertyNames(x).forEach((name) => {
        if (typeof context[name] === "function") {
          methods[name] = true;
        }
      });
    }

    let proxy = (name, args) => {
      return new Promise((resolve, reject) => {
        context[name].apply(context, args.concat((err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }));
      });
    };

    Object.keys(methods).forEach((name) => {
      this[name] = (...args) => proxy(name, args);
    });
  }
}

export default (context, methodName = null, args = []) => {
  if (methodName === null) {
    return new Prominence(context);
  }
  return new Promise((resolve, reject) => {
    context[methodName].apply(context, args.concat((err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    }));
  });
};
