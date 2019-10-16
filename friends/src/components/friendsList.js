import React from "react";
import FriendForm from './FriendForm'
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
	const [friends, setFriends] = React.useState([]);

	const fetchFriends = () => {
		axiosWithAuth()
			.get("/api/friends")
			.then(res => {
				console.log(res);
				setFriends(res.data);
			});
	};

	React.useEffect(() => {
		fetchFriends();
	}, []);

	return (
		<div>
            <FriendForm />
			<h2>My Friends</h2>
			{friends.map(friendObj => {
				return <div key={friendObj.id}> {friendObj.name}</div>;
			})}
		</div>
	);
};

export default FriendsList;
