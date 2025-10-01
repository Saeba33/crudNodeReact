import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8081/student/${id}`)
			.then((res) => {
				setName(res.data.name);
				setEmail(res.data.email);
			})
			.catch((err) => console.log(err));
	}, [id]);

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.put(`http://localhost:8081/update/${id}`, { name, email })
			.then(() => navigate("/"))
			.catch((err) => console.log(err));
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
					Modifier l’étudiant
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium mb-1">Nom</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
						/>
					</div>
					<div className="flex justify-end">
						<button className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 active:scale-95 transition">
							Modifier
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UpdateStudent;
