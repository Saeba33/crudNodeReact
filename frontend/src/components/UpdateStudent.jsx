import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		const updatedStudent = { name, email };
		axios
			.put(`http://localhost:8081/update/${id}`, updatedStudent)
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((err) => console.log(err));
	}
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<h2>Modifier étudiant</h2>
					<div>
						<label htmlFor="">Nom</label>
						<input
							type="text"
							placeholder="entre votre nom"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="">Email</label>
						<input
							type="text"
							placeholder="entre votre email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button>Modifier</button>
				</form>
			</div>
		</div>
	);
}

export default UpdateStudent;
