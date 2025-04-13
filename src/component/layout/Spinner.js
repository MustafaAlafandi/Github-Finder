import spinner from "../../assets/spinner.gif";
function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      className="block m-auto"
      width="200px"
    />
  );
}

export default Spinner;
