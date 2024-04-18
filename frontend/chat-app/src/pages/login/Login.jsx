import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [userName, setuserName] = useState("");
	const [password, setPassword] = useState("");

	const {loading , login } = useLogin();

	const handleFormSubmit = async (e)=>{
		e.preventDefault();
		await login({userName, password});
	}
  return (
    <div>
			<div >
				<h1 >
					Login
					<span> ChatApp</span>
				</h1>

				<form onSubmit={handleFormSubmit}>
					<div>
						<label>
							<span>userName</span>
						</label>
						<input
							type='text'
							placeholder='Enter userName'
							value={userName}
							onChange={(e) => setuserName(e.target.value)}
						/>
					</div>

					<div>
						<label>
							<span>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
						<Link to='/signup'>
							Dont have an account, signup?
						</Link>

					<div>
						<button>
							{loading ? "Loading": 'Login' }
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Login