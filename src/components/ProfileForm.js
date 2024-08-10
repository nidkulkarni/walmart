import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        name: localStorage.getItem('name') || '',
        mobile: localStorage.getItem('mobile') || '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        store: '',
        occupation: '',
        purpose: ''
    });

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profileData.pincode.length !== 6) {
            alert('Pincode must be 6 digits.');
            return;
        }

        // Store profile data or send to backend
        localStorage.setItem('profileData', JSON.stringify(profileData));
        setSuccess(true);

        // Redirect to Dashboard or any other page based on your need
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className="container">
            <h2>Profile Form</h2>
            {success && <div className="success-message">Registered Successfully!</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    readOnly
                />
                <input
                    type="number"
                    name="mobile"
                    value={profileData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    readOnly
                />
                <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <select
                    name="state"
                    value={profileData.state}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <input
                    type="text"
                    name="city"
                    value={profileData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                />
                <input
                    type="number"
                    name="pincode"
                    value={profileData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    required
                />
                <select
                    name="store"
                    value={profileData.store}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Store</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Chennai">Chennai</option>
                    {/* Add other Walmart India stores here */}
                </select>
                <input
                    type="text"
                    name="occupation"
                    value={profileData.occupation}
                    onChange={handleChange}
                    placeholder="Occupation"
                    required
                />
                <textarea
                    name="purpose"
                    value={profileData.purpose}
                    onChange={handleChange}
                    placeholder="What do you want to supply to Walmart?"
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfileForm;
