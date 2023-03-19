import Header from "./components/Header";
import Database from "./pages/Database";
import Exam from "./pages/Exam";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Database />} />
          <Route path="/exam_invigilation" element={<Exam />} />
          <Route path="/student_details" element={<StudentDetails />} />
          <Route path="/add_students" element={<AddStudent/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
