import ReactDom from "react-dom";

const Greeting = () => {
	return <h4>Greetings stranger</h4>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));

