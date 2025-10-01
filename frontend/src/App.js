import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";
import CreateStudent from "./components/CreateStudent";
import UpdateStudent from "./components/UpdateStudent";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Student />}></Route>
					<Route path="/create" element={<CreateStudent />}></Route>
					<Route path="/update/:id" element={<UpdateStudent />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
