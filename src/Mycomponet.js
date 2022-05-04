import "./index.css";

const MyComponent = (props) => {
  return <div className="ex">안녕하세요 제 이름은 {props.name} 입니다.</div>;
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
