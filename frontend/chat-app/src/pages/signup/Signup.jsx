import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
	const [inputs, setInputs ] = useState({
		fullName : '',
		userName : '',
		gender : '',
		password : '',
		confirmPassword : '',
		
	});


	const {loading, signup} = useSignup();


	const handleGenderChange = (e)=>{
		const {checked , value } = e.target;
		if(checked){
			setInputs({...inputs, gender: value})
		}
		console.log(inputs.gender)
	}

	const handleFormSubmit = async (e)=>{
		e.preventDefault();
		await signup(inputs);
	}
	
  return (
    		<div>
			<div>
				<h1>
					Sign Up <span> ChatApp</span>
				</h1>

				<form onSubmit={handleFormSubmit}>
					<div>
						<label>
							<span>Full Name</span>
						</label>
						<input type='text' placeholder='Full Name..' 
						value={inputs.fullName}
						onChange={(e)=>setInputs({...inputs, fullName: e.target.value})}/>
					</div>

					<div>
						<label >
							<span>Username</span>
						</label>
						<input type='text' placeholder='userName' 
						value={inputs.userName}
						onChange={e=> setInputs({...inputs, userName : e.target.value})}/>
					</div>

					<div>
						<label>
							<span>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							value={inputs.password}
							onChange={e=> setInputs({...inputs, password: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm password'
							value={inputs.confirmPassword}
							onChange={e=> setInputs({...inputs, confirmPassword: e.target.value} )}
						/>
					</div>

					{/* <GenderCheckbox /> */}
                    <div>
         			<div>
         				<label >
         					<span>Male</span>
         					<input type='checkbox' 
							value='male'
							name='gender'
							checked={inputs.gender === 'male'}
							onChange={handleGenderChange}
							/>
         				</label>
         			</div>
        			<div>
         				<label>
         					<span>Female</span>
        					<input type='checkbox'
							value='female'
							checked={inputs.gender === 'female'}
							name='gender'
							onChange={handleGenderChange}
							/>
        				</label>
         			</div>
        		    </div>

					<Link to='/login'>
						Already have an account, login?
					</Link>

					<div>
						<button>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Signup