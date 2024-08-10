import React from 'react';

const Dashboard = () => {
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  return (
    <div className="container">
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
            <th>Store</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{profileData.name}</td>
            <td>{profileData.mobile}</td>
            <td>{profileData.address}</td>
            <td>{profileData.state}</td>
            <td>{profileData.city}</td>
            <td>{profileData.pincode}</td>
            <td>{profileData.store}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
