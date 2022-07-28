import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket() {
	const { user } = useSelector((state) => state.auth);
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [product, setProduct] = useState('Razer Blade 15');
	const [description, setDescription] = useState('');

	return (
		<>
			<section>
				<h1>Create New Ticket</h1>
				<p>Please fill out the form below</p>
			</section>

			<section>
				<div className="form-group"></div>
			</section>
		</>
	);
}

export default NewTicket;
