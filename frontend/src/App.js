import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Student/>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
