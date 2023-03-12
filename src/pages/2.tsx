import ReactJson from "react-json-view";

const object = {
  a: 1,
};

export default () => {
  return (
    <ReactJson
      src={object}
      onEdit={() => {
        return false;
      }}
    />
  );
};
