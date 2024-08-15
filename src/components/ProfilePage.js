import React, { useEffect, useState, useCallback } from 'react';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userProfile'));
        if (data) {
            setProfileData(data);
        }
    }, []);

    const initMap = useCallback(() => {
        if (!window.google) {
            console.error('Google Maps JavaScript API script not loaded');
            return;
        }

        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: 17.385044, lng: 78.486671 },
        });

        const stores = [
            { name: 'Store 1', lat: 17.385044, lng: 78.486671 },
            { name: 'Store 2', lat: 17.375044, lng: 78.476671 },
        ];

        stores.forEach(store => {
            new window.google.maps.Marker({
                position: { lat: store.lat, lng: store.lng },
                map: map,
                title: store.name,
            });
        });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    new window.google.maps.Marker({
                        position: pos,
                        map: map,
                        title: 'Your Location',
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    });

                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, map.getCenter(), map);
                }
            );
        } else {
            handleLocationError(false, map.getCenter(), map);
        }
    }, []);

    const handleLocationError = (browserHasGeolocation, pos, map) => {
        new window.google.maps.InfoWindow({
            content: browserHasGeolocation
                ? 'Error: The Geolocation service failed.'
                : "Error: Your browser doesn't support geolocation.",
            position: pos,
        }).open(map);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjNi2POauHkeugp54-sjd8DLn3qWCUbt0&libraries=places`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            initMap();
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [initMap]);

    if (!profileData) {
        return <p>Loading profile...</p>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>{profileData.name}</h2>
                <p>{profileData.occupation}</p>
            </div>
            <div className="profile-info">
                <p><strong>Mobile:</strong> {profileData.mobile}</p>
                <p><strong>Address:</strong> {profileData.address}, {profileData.city}, {profileData.state} - {profileData.pincode}</p>
                <p><strong>Purpose:</strong> {profileData.purpose}</p>
                {profileData.occupation === 'Farmer' && (
                    <>
                        <p><strong>Acres of Land:</strong> {profileData.acresOfLand}</p>
                        <p><strong>Crop:</strong> {profileData.crop}</p>
                        <p><strong>Ration Card/Aadhar:</strong> {profileData.rationCardOrAadhar}</p>
                        <p><strong>Revenue Amount:</strong> {profileData.revenueAmount}</p>
                    </>
                )}
                {profileData.occupation === 'Banker' && (
                    <>
                        <p><strong>Bank Account Name:</strong> {profileData.bankAccountName}</p>
                        <p><strong>Bank ID:</strong> {profileData.bankId}</p>
                        <p><strong>Branch:</strong> {profileData.branch}</p>
                        <p><strong>Offers:</strong> {profileData.offers}</p>
                    </>
                )}
                {profileData.occupation === 'Artisan' && (
                    <>
                        <p><strong>Artisan Details:</strong> {profileData.artisanDetails}</p>
                        <p><strong>Product Description:</strong> {profileData.productDescription}</p>
                        <p><strong>Company Name:</strong> {profileData.companyName}</p>
                    </>
                )}
                {profileData.occupation === 'Others' && (
                    <>
                        <p><strong>Description:</strong> {profileData.othersDescription}</p>
                        <p><strong>Company Name:</strong> {profileData.companyName}</p>
                    </>
                )}
            </div>
            <div>
                <h1>Store Locator and Geolocation</h1>
                <div id="map" style={{ height: '500px', width: '100%' }}></div>
            </div>
        </div>
    );
};

export default ProfilePage;
