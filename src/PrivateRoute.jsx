import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import axios from 'axios';

function PrivateRoute({ element: Component, ...rest }) {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        } else {
            return true;

        }


        // You can implement a token validation call here


        axios.post('http://localhost:3000/user/validate-token', {}, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(response => {
                return response.status === 200;
            })
            .catch(() => {
                return false;
            });
    };

    return (
        
        <Route
            {...rest}
            element={
                isAuthenticated() ? (
                    <Component />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute;
