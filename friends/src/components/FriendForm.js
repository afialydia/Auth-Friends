import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendForm = props => {
	const [form, setForm] = React.useState({ name: "", age: "", email: "" });

	const handleChanges = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const addFriend = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/api/friends", form)
			.then(res => {
                console.log(res);
                props.setFriends(res.data)
            })
            .catch(err => console.log(err.response));
	};
	return (
		<div>
			<form onSubmit={addFriend}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={form.name}
					onChange={handleChanges}
				/>
				<input
					type="number"
					name="age"
					value={form.age}
					onChange={handleChanges}
				/>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChanges}
				/>
				<button type="submit">Add Friend</button>
			</form>
		</div>
	);
};

export default FriendForm;
