import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Signup successful!');
      } else {
        alert(data.error || 'Error during sign up');
      }
    } catch (error) {
      alert('Error during sign up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="middleName" placeholder="Middle Name (optional)" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="email" placeholder="Email Address" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
