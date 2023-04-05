import Database from "./pages/Database";
import Exam from "./pages/Exam";
import StudentLog from "./pages/StudentLog";
import AddStudent from "./pages/AddStudent";
import Login from "./pages/Login";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Database />} />
            <Route path="/exam_invigilation" element={<Exam />} />
            <Route path="/student_logbook" element={<StudentLog />} />
            <Route path="/add_students" element={<AddStudent />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
