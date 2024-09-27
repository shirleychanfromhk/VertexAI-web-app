import { CenteredContainer } from "./App.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./components/Button.styled";

function AnswerRespond() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.result) {
    return (
      <CenteredContainer>
        <div className="btn-group-vertical">
          <h2>No result available</h2>
          <Button onClick={() => navigate("/")}>Go back to form</Button>
        </div>
      </CenteredContainer>
    );
  }

  const { result } = location.state;

  return (
    <CenteredContainer>
      <div className="btn-group-vertical">
        <h4 style={{ color: "#767676" }}>
          Answer from VertexAI:
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : (
            <p>{JSON.stringify(result)}</p>
          )}
        </h4>
        <Button onClick={() => navigate("/")}>Go back to form</Button>
      </div>
    </CenteredContainer>
  );
}

export default AnswerRespond;
