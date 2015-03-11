"use strict";

import fs from "fs";
import assert from "assert";
import prominence from "../src/prominence";

describe("prominence(context: object, methodName: string, args: any[]): Promise<any>", () => {
  context("resolve", () => {
    it("works", () => {
      let expected = fs.readFileSync(__filename, "utf-8");

      return prominence(fs, "readFile", [ __filename, "utf-8" ]).then((result) => {
        assert(result === expected);
      }, () => { throw new Error("NOT REACHED"); });
    });
  });
  context("reject", () => {
    it("works", () => {
      return prominence(fs, "readFile", [ __filename + Math.random(), "utf-8" ]).then(() => {
        throw new Error("NOT REACHED");
      }, (e) => {
        assert(e instanceof Error);
      });
    });
  });
  context("ES7 async/await", () => {
    /* jshint ignore: start */
    it("works", async function() {
      let expected = fs.readFileSync(__filename, "utf-8");

      let result = await prominence(fs, "readFile", [ __filename, "utf-8" ]);

      assert(result === expected);
    });
    /* jshint ignore: end */
  });
});
