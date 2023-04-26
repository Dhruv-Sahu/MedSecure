import { useState } from "react";
import {
  BrowserRouter,
  Link,
  useNavigate,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import shortid from "shortid";

// Props are not used to get data from backend
export default function Templink(props) {
  const navigate = useNavigate();

  const [link, setLink] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);

  function generateTemporaryLink() {
    const uniqueId = "subham"; //props.cid
    const expirationDate = Math.round(Date.now() / 1000) + 60;
    // expirationDate.setDate(expirationDate.getDate() + 2);
    setLink(`http://localhost:3000/tempNFT?cid=${uniqueId}&time=${expirationDate}`);
    // setExpirationDate(expirationDate);
  }

  return (
    // <BrowserRouter>
    <div style={{ marginTop: "95px" }}>
      <button onClick={generateTemporaryLink}>Generate Temporary Link</button>
      <br />
      {link && (
        <div>
          <a href={link}>click to open</a>
          {expirationDate && <p>Expires on: {expirationDate.toDateString()}</p>}
        </div>
      )}
      <Routes>
        <Route path="/temporary-link/*" element={<TemporaryLink />} />
        <Route
          path="/link-expired"
          element={<p>The temporary link has expired.</p>}
        />
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

function TemporaryLink() {
  const location = useLocation();
  const link = location.pathname.replace("/temporary-link", "");
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Expires in 7 days

  const handleClick = (e) => {
    e.preventDefault();
    window.open(link, "_blank").focus();
  };

  if (expirationDate < new Date()) {
    return <Navigate to="/link-expired" />;
  }

  return (
    <div style={{ margintop: "100px" }}>
      <p>
        Temporary link:{" "}
        <a href="#" onClick={handleClick}>
          {link}
        </a>
      </p>
      <p>Expires on: {expirationDate.toDateString()}</p>
      <p>Current location: {location.pathname}</p>
    </div>
  );
}
