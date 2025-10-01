import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CreateStudent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
        .then(res => {
            console.log("created student", res);
            navigate('/');
        })
    }
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<h2>Ajouter étudiant</h2>
					<div>
						<label htmlFor="">Nom</label>
						<input
							type="text"
							placeholder="entre votre nom"
							onchange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="">Email</label>
						<input
							type="text"
							placeholder="entre votre email"
							onchange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button>Soumettre</button>
				</form>
			</div>
		</div>
	);
}

export default CreateStudent;
