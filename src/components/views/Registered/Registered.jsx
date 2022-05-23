import { useParams } from "react-router-dom";
const Registered = () => {
  const { teamID } = useParams();
  return <div className="container">Registered at {teamID}</div>;
};

export default Registered;
