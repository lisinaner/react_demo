/* 表单保存(有多选内容) */
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useParseQuery } from "@parse/react";
const MyObject = Parse.Object.extend("form1");
const onFinish = (values: any) => {
  const myObject = new MyObject();
  myObject.set(values);
  myObject.save();
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  let [options, setOptions] = useState<any[]>([]);
  const parseQuery = new Parse.Query("name");
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
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Username" name="username">
        <Select options={options} style={{ width: 120 }} mode="multiple">
          {" "}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
