import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
	const [form, setForm] = React.useState({
		username: "",
		password: ""
	});

	const handleChanges = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/api/login", form)
			.then(res => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/");
			})
			.catch(err => {
				console.log(err.response);
				setForm({
					username: "",
					password: ""
				});
			});
	};

	return (
		<div>
			<form onSubmit={login}>
				<input
					type="text"
					name="username"
					onChange={handleChanges}
					value={form.username}
				/>
				<input
					type="password"
					name="password"
					onChange={handleChanges}
					value={form.password}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;

// import React from 'react';

// import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { Redirect } from 'react-router-dom';

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     // login to retrieve the JWT token
//     // add the token to localstorage
//     // route to /protected (whatever landing page)
//     axiosWithAuth()
//       .post('/api/login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         this.props.history.push('/protected');
//       })
//       .catch(err => console.log(err.response));
//   };

//   render() {
//     if (localStorage.getItem('token')) {
//       return <Redirect to="protected" />;
//     }
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login
