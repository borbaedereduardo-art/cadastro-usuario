import './UserList.css';
export function UserList({ users, onDeleteUser }) {
    return (
      <div className="user-list">
        <h2>Usuários Cadastrados ({users.length})</h2>
        {users.length === 0 ? (
          <p className="no-users">Nenhum usuário cadastrado ainda.</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="user-item">
                <div>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>
                <button 
                  onClick={() => onDeleteUser(user.id)} 
                  className="btn-delete"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }