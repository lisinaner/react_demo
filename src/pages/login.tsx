import localforage from "localforage";
import { useEffect, useState } from "react";

export default () => {
  const [userName, setUserName] = useState<string>("");
  useEffect(() => {
    localforage.getItem("userName").then((value: any) => {
      setUserName(value);
    });
  });
  localforage.setItem("userName", "李思南");
  return <div>{userName}</div>;
};
