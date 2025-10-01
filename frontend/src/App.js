import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";
import CreateStudent from "./components/CreateStudent";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Student />}></Route>
					<Route path="/create" element={<CreateStudent />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
