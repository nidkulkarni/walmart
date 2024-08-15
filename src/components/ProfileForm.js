import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        name: localStorage.getItem('name') || '',
        mobile: localStorage.getItem('mobile') || '',
        occupation: localStorage.getItem('occupation') || '',
        acresOfLand: localStorage.getItem('acresOfLand') || '',
        crop: localStorage.getItem('crop') || '',
        rationCardOrAadhar: localStorage.getItem('rationCardOrAadhar') || '',
        revenueAmount: localStorage.getItem('revenueAmount') || '',
        bankAccountName: localStorage.getItem('bankAccountName') || '',
        bankId: localStorage.getItem('bankId') || '',
        branch: localStorage.getItem('branch') || '',
        offers: localStorage.getItem('offers') || '',
        artisanDetails: localStorage.getItem('artisanDetails') || '',
        productDescription: localStorage.getItem('productDescription') || '',
        companyName: localStorage.getItem('companyName') || '',
        othersDescription: localStorage.getItem('othersDescription') || '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        purpose: ''
    });

    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(profileData));
        setSuccess(true);

        // Redirect to Profile Page after registration
        setTimeout(() => {
            navigate('/form');
        }, 2000);
    };

    const statesAndUTs = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
        'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
        'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
        'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
        'Delhi', 'Puducherry'
    ];

    return (
        <div className="container">
            <h2>Profile Form</h2>
            {success && <div className="success-message">Registered Successfully!</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    placeholder="Name"
                    readOnly
                />
                <input
                    type="number"
                    name="mobile"
                    value={profileData.mobile}
                    placeholder="Mobile Number"
                    readOnly
                />
                <select
                    name="occupation"
                    value={profileData.occupation}
                    onChange={handleChange}
                >
                    <option value="Farmer">Farmer</option>
                    <option value="Banker">Banker</option>
                    <option value="Artisan">Artisan</option>
                    <option value="Others">Others</option>
                </select>

                {profileData.occupation === 'Farmer' && (
                    <>
                        <input
                            type="text"
                            name="acresOfLand"
                            value={profileData.acresOfLand}
                            placeholder="Acres of Land"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="crop"
                            value={profileData.crop}
                            placeholder="Crop they harvest"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="rationCardOrAadhar"
                            value={profileData.rationCardOrAadhar}
                            placeholder="Ration Card/Aadhar Card"
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="revenueAmount"
                            value={profileData.revenueAmount}
                            placeholder="Revenue Amount of Crop Supplied"
                            onChange={handleChange}
                        />
                    </>
                )}

                {profileData.occupation === 'Banker' && (
                    <>
                        <input
                            type="text"
                            name="bankAccountName"
                            value={profileData.bankAccountName}
                            placeholder="Bank Account Name"
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="bankId"
                            value={profileData.bankId}
                            placeholder="Bank ID"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="branch"
                            value={profileData.branch}
                            placeholder="Branch"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="offers"
                            value={profileData.offers}
                            placeholder="Offers to Walmart"
                            onChange={handleChange}
                        />
                    </>
                )}

                {profileData.occupation === 'Artisan' && (
                    <>
                        <input
                            type="text"
                            name="artisanDetails"
                            value={profileData.artisanDetails}
                            placeholder="Artisan Details"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="productDescription"
                            value={profileData.productDescription}
                            placeholder="Product Description"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="companyName"
                            value={profileData.companyName}
                            placeholder="Company Name (if any)"
                            onChange={handleChange}
                        />
                    </>
                )}
                {profileData.occupation === 'Others' && (
                    <>
                        <input
                            type="text"
                            name="othersDescription"
                            value={profileData.othersDescription}
                            placeholder="Description of Your Offerings"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="companyName"
                            value={profileData.companyName}
                            placeholder="Company Name (if any)"
                            onChange={handleChange}
                        />
                    </>
                )}

                <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    placeholder="Address"
                    onChange={handleChange}
                    required
                />
                <select
                    name="state"
                    value={profileData.state}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select State</option>
                    {statesAndUTs.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <input
                    type="text"
                    name="city"
                    value={profileData.city}
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="pincode"
                    value={profileData.pincode}
                    placeholder="Pincode"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="purpose"
                    value={profileData.purpose}
                    placeholder="Purpose"
                    onChange={handleChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfileForm;
