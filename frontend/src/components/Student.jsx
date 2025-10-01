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
		try {
			await axios.delete("http://localhost:8081/student/" + id);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="text-red-500">
			Hello World
			<div>
				<Link to="/create">Ajouter</Link>
				<table>
					<thead>
						<tr>
							<th>Nom</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{student.map((data, index) => (
							<tr key={index}>
								<td>{data.name}</td>
								<td>{data.email}</td>
								<td>
									<Link to={`/update/${data.id}`}>Modifier</Link>
									<button onClick={(e) => handleDelete(data.id)}>
										Supprimer
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Student;
