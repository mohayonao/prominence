"use strict";

export default (context, method, args = []) => {
  return new Promise((resolve, reject) => {
    context[method].apply(context, args.concat((err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    }));
  });
};