/* 使用的范本 */
import React, { useState, useMemo } from "react";
import { initializeParse, useParseQuery } from "@parse/react";

initializeParse("http://localhost:1337/parse", "lsn", "");

function App() {
  const [hideDone, setHideDone] = useState(false);

  const parseQuery = useMemo(() => {
    const parseQuery = new Parse.Query("Todo");
    if (hideDone) {
      parseQuery.notEqualTo("done", true);
    }

    (parseQuery as any).withCount();
    return parseQuery;
  }, [hideDone]);

  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <button onClick={() => setHideDone(!hideDone)}>
          {hideDone ? "Unhide" : "Hide"} done todos
        </button>
        {isLoading && <p>Loading...</p>}
        {isLive && <p>Live!</p>}
        {isSyncing && <p>Syncing...</p>}
        {results && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.get("title")}</li>
            ))}
          </ul>
        )}
        <p>{count}</p>
        {error && <p>{error.message}</p>}
        <button onClick={reload}>Reload</button>
      </header>
    </div>
  );
}

export default App;
