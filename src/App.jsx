import { useState } from 'react';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';
import './index.css';

export function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>Sistema de Cadastro</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
}

export default App;