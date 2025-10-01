import { useEffect, useState } from "react";
import axios from "axios";

function Student() {

	const [student, setStudent] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8081')
		.then(res => console.log(res))
		.catch(err => console.log(err));
	}, [])


	return (
		<div className="text-red-500">
			Hello World
			<div>
				<button>Ajouter</button>
				<table>
					<thead>
						<tr>
							<th>Nom</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{
							student.map((data, index) => (
								<tr key={index}>
									<td>{data.name}</td>
									<td>{DataTransfer.email}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Student;
