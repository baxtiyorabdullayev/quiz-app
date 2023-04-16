import "./Exam.css";
import { useQuizsQuery } from "../../services/quizAPI";
import Quiz from "../../components/Quiz/Quiz";

function Exam() {
  const { data, error, isLoading, isSuccess } = useQuizsQuery();

  return (
    <div className="exam">
      {data?.length > 0 ? (
        <form>
          {data?.map((element) => (
            <Quiz key={element.id} {...element} />
          ))}
        </form>
      ) : (
        <h1>There no tests yet...</h1>
      )}
    </div>
  );
}

export default Exam;
