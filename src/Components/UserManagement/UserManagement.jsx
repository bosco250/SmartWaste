import React, { useState } from 'react';
import UserList from './UserList';
import UserEdit from './UserEdit';
import UserAdd from './UserAdd';
import { userData } from './data';

const UserManagement = () => {
    const [users, setUsers] = useState(userData);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleEditClick = (user) => {
        setSelectedUser(user);
    };

    const handleSave = (updatedUser) => {
        const updatedUsers = users.map((user) =>
            user.user_id === updatedUser.user_id ? updatedUser : user
        );
        setUsers(updatedUsers);
        setSelectedUser(null);
    };

    const handleAddUser = (newUser) => {
        setUsers([...users, newUser]);
        setShowAddModal(false);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex justify-between mb-4">
                <p className='text-2xl' >All users</p>
                <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                    onClick={() => setShowAddModal(true)}
                >
                    Add User
                </button>
            </div>
            <UserList users={users} onEditClick={handleEditClick} />
            {selectedUser && (
                <UserEdit user={selectedUser} onSave={handleSave} onCancel={() => setSelectedUser(null)} />
            )}
            {showAddModal && (
                <UserAdd onSave={handleAddUser} onCancel={() => setShowAddModal(false)} />
            )}
        </div>
    );
};

export default UserManagement;