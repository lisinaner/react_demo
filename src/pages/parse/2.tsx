/* 查询对象 */
import React, { useState, useMemo } from "react";
import { initializeParse, useParseQuery } from "@parse/react";

initializeParse("http://localhost:1337/parse", "lsn", "");
export default () => {
  const parseQuery = new Parse.Query("Post");
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);
  debugger;
  return <div>123</div>;
};
