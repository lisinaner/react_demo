import { JsonViewer } from "@textea/json-viewer";

const object = {
  a: 1,
};

export default () => {
  return (
    <JsonViewer
      value={object}
      editable
      onChange={(path, value) => {
        console.log(path, value);
      }}
    />
  );
};
