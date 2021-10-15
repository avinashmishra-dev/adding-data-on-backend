const Button = (props) => {
  return <button onClick={props.onFetch} className="custom-btn">{props.children}</button>;
};

export default Button;
