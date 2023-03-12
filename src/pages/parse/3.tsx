/* 创建对象 */
import React, { useState, useMemo } from "react";
import { initializeParse, useParseQuery } from "@parse/react";

initializeParse("http://localhost:1337/parse", "lsn", "");
export default () => {
  const MyObject = Parse.Object.extend("BB");

  return (
    <div
      onClick={() => {
        const myObject = new MyObject();
        myObject.set("myField", "myValue");
        myObject.save();
      }}
    >
      增加
    </div>
  );
};
