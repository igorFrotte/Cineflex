import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Filme({setOi}) {

  const oi = useParams();

    return (
      <>
      <Link to="/sucesso">
        <h1 onClick={()=> {
          setOi("igorGenio");
        }} >{oi.idFilme}</h1>
      </Link>
      </>
    );
}