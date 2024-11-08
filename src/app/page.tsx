// pages/index.js
import Header from "../components/Header"; // Headerコンポーネントをインポート
import Question_u from "../app/User_question/page";

export default function Page() {
  return (
    <div>
      <Header />
      <Question_u />
    </div>
  );
}
