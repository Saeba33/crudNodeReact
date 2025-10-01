import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.post("http://localhost:8081/create", { name, email })
			.then(() => {
				navigate("/");
			})
			.catch((err) => console.error(err));
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
				<h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
					Ajouter un étudiant
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label className="block text-sm font-medium mb-1">Nom</label>
						<input
							type="text"
							placeholder="Entrez votre nom"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							placeholder="Entrez votre email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
						/>
					</div>
					<div className="flex justify-end">
						<button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 active:scale-95 transition">
							Créer
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateStudent;
