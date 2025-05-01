import { useState, ChangeEvent, FormEvent } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      alert(data.message);
    } catch (error: any) {
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
