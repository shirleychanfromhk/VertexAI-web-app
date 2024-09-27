import { useState } from "react";
import { CenteredContainer } from "./App.styled";
import { Spinner } from "./components/Loading.styled";
import Axios from "axios";
import { Button } from "./components/Button.styled";
import { useNavigate } from "react-router-dom";
import { TextArea } from "./components/TextArea.styled";

function inputQuestion() {
  const [question, setQuestion] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchQueryData = async () => {
    setLoading(true);
    try {
      const response = await Axios.post(
        "http://localhost:8080/genAiDemo/interact",
        {
          question: question,
        }
      );

      const result = response.data;

      navigate("/result", { state: { result } });
    } catch (error) {
      console.error("API call error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSentimantalData = async () => {
    setLoading(true);
    try {
      const response = await Axios.post(
        "http://localhost:8080/genAiDemo/detectFraud",
        {
          emailTitle: question,
        }
      );

      const result = response.data;

      navigate("/result", { state: { result } });
    } catch (error) {
      console.error("API call error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading)
    return (
      <CenteredContainer>
        {" "}
        <Spinner />{" "}
      </CenteredContainer>
    );

  return (
    <CenteredContainer>
      <div className="btn-group-vertical">
        <h4 style={{ color: "#767676" }}>
          Question :
          <TextArea
            placeholder=""
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
            }}
          />
        </h4>
        <Button onClick={fetchQueryData}>Give Me Answer</Button>
        <Button onClick={fetchSentimantalData}>Check Email Title</Button>
      </div>
    </CenteredContainer>
  );
}

export default inputQuestion;
