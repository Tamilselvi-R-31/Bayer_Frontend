import { useState } from "react";
import Sidebar from '../../../../../components/common/sidebar'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [user, setUser] = useState({
    name: "Rino",
    email: "rlrino102@gmail.com",
    allergies: "No",
    medications: "No",
  });

  const [newPassword, setNewPassword] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    setIsChangingPassword(true);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    alert("Password changed successfully");
    setIsChangingPassword(false);
  };

  return (
    <div className="flex">
    <Sidebar />
    <div className="profileContainer">
      <h2>Profile</h2>
      <div className="profileInfo">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Allergies:</strong> {user.allergies}</p>
        <p><strong>Current Medications:</strong> {user.medications}</p>
        <button onClick={handleEdit} className="editButton">Edit</button>
      </div>
      
      {isEditing && (
        <div className="modal">
          <div className="modalContent">
            <h3>Edit Profile</h3>
            <form onSubmit={handleSave}>
              <label>Name:</label>
              <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} required />
              <label>Email:</label>
              <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} required disabled/>
              <label>Allergies:</label>
              <input type="text" value={user.allergies} onChange={(e) => setUser({...user, allergies: e.target.value})} required />
              <label>Current Medications:</label>
              <input type="text" value={user.medications} onChange={(e) => setUser({...user, medications: e.target.value})} required />
              <button type="submit">Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

    
    </div>
   </div>
  );
}
