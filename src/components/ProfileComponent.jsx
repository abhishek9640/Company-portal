import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserProfile, createUserProfile } from '../api/authUtils';

const Profile = ({ userId }) => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await getUserProfile(userId);
      if (data) {
        setFormData(data);
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserProfile(userId, formData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-semibold">Profile</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button type="submit" className="btn mt-4">Save</button>
      </form>
    </div>
  );
};

Profile.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Profile;
