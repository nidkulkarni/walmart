import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const Dashboard = () => {
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userProfile'));
        if (data) {
            if (Array.isArray(data)) {
                setProfileData(data); // Directly use the data if it's already an array
            } else {
                setProfileData([data]); // Wrap single object in array if necessary
            }
        }
    }, []);

    const exportToCSV = () => {
        const csvData = profileData.map(profile => ({
            Name: profile.name,
            Mobile: profile.mobile,
            Address: profile.address,
            State: profile.state,
            City: profile.city,
            Pincode: profile.pincode,
            Purpose: profile.purpose,
            Occupation: profile.occupation,
            AcresOfLand: profile.acresOfLand,
            Crop: profile.crop,
            RationCardOrAadhar: profile.rationCardOrAadhar,
            RevenueAmount: profile.revenueAmount,
            BankAccountName: profile.bankAccountName,
            BankId: profile.bankId,
            Branch: profile.branch,
            Offers: profile.offers,
            ArtisanDetails: profile.artisanDetails,
            ProductDescription: profile.productDescription,
            CompanyName: profile.companyName,
            OthersDescription: profile.othersDescription,
        }));

        const csv = Papa.unparse(csvData);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'dashboard_data.csv');
    };

    if (profileData.length === 0) {
        return <p>Loading profile data...</p>;
    }

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Purpose</th>
                        <th>Occupation</th>
                        <th>AcresOfLand</th>
                        <th>Crop</th>
                        <th>RationCardOrAadhar</th>
                        <th>RevenueAmount</th>
                        <th>BankAccountName</th>
                        <th>BankId</th>
                        <th>Branch</th>
                        <th>Offers</th>
                        <th>ArtisanDetails</th>
                        <th>ProductDescription</th>
                        <th>CompanyName</th>
                        <th>OthersDescription</th>
                    </tr>
                </thead>
                <tbody>
                    {profileData.map((profile, index) => (
                        <tr key={index}>
                            <td>{profile.name}</td>
                            <td>{profile.mobile}</td>
                            <td>{profile.address}</td>
                            <td>{profile.state}</td>
                            <td>{profile.city}</td>
                            <td>{profile.pincode}</td>
                            <td>{profile.purpose}</td>
                            <td>{profile.occupation}</td>
                            <td>{profile.acresOfLand}</td>
                            <td>{profile.crop}</td>
                            <td>{profile.rationCardOrAadhar}</td>
                            <td>{profile.revenueAmount}</td>
                            <td>{profile.bankAccountName}</td>
                            <td>{profile.bankId}</td>
                            <td>{profile.branch}</td>
                            <td>{profile.offers}</td>
                            <td>{profile.artisanDetails}</td>
                            <td>{profile.productDescription}</td>
                            <td>{profile.companyName}</td>
                            <td>{profile.othersDescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={exportToCSV}>Download CSV</button>
        </div>
    );
};

export default Dashboard;
