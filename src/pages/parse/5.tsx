/* 下拉选择器,a选择后,减去b的选项 */
import { useParseQuery } from "@parse/react";
import { Select } from "antd";
import { useEffect, useState } from "react";

const MyObject = Parse.Object.extend("name");
function f1() {
  [
    { value: "jack", label: "Jack" },
    { value: "lucy", label: "Lucy" },
    { value: "Yiminghe", label: "yiminghe" },
    { value: "disabled", label: "Disabled", disabled: true },
  ].map((item) => {
    const myObject = new MyObject();
    myObject.set(item);
    myObject.save();
  });
}
export default () => {
  const parseQuery = new Parse.Query("name");
  const handleChange = (value: any) => {
    setSelectedOptions1(value);
  };
  let [options, setOptions] = useState<any[]>([]);
  const [selectedOptions1, setSelectedOptions1] = useState<any[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  useEffect(() => {
    let data2 = results?.map((item: any) => {
      return { value: item.id, label: item.get("label") };
    });
    if (data2) {
      setOptions(data2);
    }
  }, [results]);

  useEffect(() => {
    const filtered = options.filter(
      (option) => !selectedOptions1.includes(option.value)
    );
    setFilteredOptions(filtered);
  }, [options, selectedOptions1]);

  return (
    <>
      {/* <div onClick={f1}>生成数据</div> */}

      <Select
        options={options}
        style={{ width: 120 }}
        mode="multiple"
        onChange={handleChange}
      >
        {" "}
      </Select>
      <Select options={filteredOptions} style={{ width: 120 }} mode="multiple">
        {" "}
      </Select>
    </>
  );
};
