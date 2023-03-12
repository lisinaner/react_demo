import { useParseQuery } from "@parse/react";
import { Form, Select } from "antd";
import { useEffect, useState } from "react";
const { Option } = Select;
/* 获取数据,然后给form一个初始值 */
export default () => {
  const [dataSource, setDataSource] = useState<any>({});
  let [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    const objectId = "jxFugVrjxR"; // 要查询的对象 ID
    const MyObject = Parse.Object.extend("form1"); // 构造对象类
    const query = new Parse.Query(MyObject); // 创建查询对象
    async function f1() {
      let data = await query.get(objectId);
      console.log(data.toJSON());
      setDataSource(data.toJSON());
    }
    f1();
  }, []);

  const [form] = Form.useForm();
  const parseQuery = new Parse.Query("name");
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

  useEffect(() => {
    let data2 = results?.map((item: any) => {
      return { value: item.id, label: item.get("label") };
    });
    if (data2) {
      console.log(data2);

      setOptions(data2);
    }
  }, [results]);

  useEffect(() => {
    // debugger;
    form.setFieldsValue({
      username: dataSource.username,
    });
  }, [form, dataSource]);
  return (
    <Form form={form}>
      <Form.Item name="username">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          options={options}
        ></Select>
      </Form.Item>
      <Form.Item>
        <button type="submit">Submit</button>
      </Form.Item>
    </Form>
  );
};
