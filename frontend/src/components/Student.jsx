import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {
	const [student, setStudent] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8081")
			.then((res) => setStudent(res.data))
			.catch((err) => console.log(err));
	}, []);

	const handleDelete = async (id) => {
		if (!window.confirm("Voulez-vous vraiment supprimer cet étudiant ?"))
			return;
		try {
			await axios.delete("http://localhost:8081/student/" + id);
			setStudent((prev) => prev.filter((s) => s.id !== id));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4">
			<div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
				<header className="flex items-center justify-between mb-8">
					<h1 className="text-3xl font-bold text-gray-800">
						Liste des étudiants
					</h1>
					<Link
						to="/create"
						className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 active:scale-95 transition"
					>
						Ajouter
					</Link>
				</header>

				{student.length > 0 ? (
					<div className="overflow-x-auto border rounded-lg border-gray-100">
						<table className="w-full  border overflow-hidden">
							<thead>
								<tr className="bg-gray-100 text-gray-700 text-sm uppercase text-center divide-x divide-gray-200">
									<th className="py-3 px-4">Nom</th>
									<th className="py-3 px-4">Email</th>
									<th className="py-3 px-4">Actions</th>
								</tr>
							</thead>
							<tbody>
								{student.map((data, index) => (
									<tr
										key={index}
										className="border-b hover:bg-gray-50 text-center divide-x divide-gray-200"
									>
										<td className="py-3 px-4">{data.name}</td>
										<td className="py-3 px-4">{data.email}</td>
										<td className="py-3 px-4 space-x-2">
											<Link
												to={`/update/${data.id}`}
												className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-lg bg-yellow-400 text-white shadow hover:bg-yellow-500 active:scale-95 transition"
											>
												Modifier
											</Link>
											<button
												onClick={() => handleDelete(data.id)}
												className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-lg bg-red-500 text-white shadow hover:bg-red-600 active:scale-95 transition"
											>
												Supprimer
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className="text-center text-gray-600 py-10">
						Aucun étudiant pour le moment.
					</p>
				)}
			</div>
		</div>
	);
}

export default Student;
