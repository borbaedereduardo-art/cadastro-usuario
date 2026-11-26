import { useState } from 'react';
import './UserForm.css'; // Opcional ou utilize estilos inline/globais

export function UserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    onAddUser(newUser);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Cadastrar Novo Usuário</h2>
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome..."
        />
      </div>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite o e-mail..."
        />
      </div>
      <button type="submit" className="btn-submit">Cadastrar</button>
    </form>
  );
}