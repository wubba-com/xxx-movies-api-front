import React, { useContext, useEffect, useState } from "react";
import { Container, Box } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AdminMenu from "../components/AdminMenu";
import AdminLogo from "../components/AdminLogo"
import AdminContent from "../components/AdminContent"
import AdminCreateContent from "../components/AdminCreateContent";

const AdminPageCreateContent = ({ title }) => {

    return (
        <Container maxWidth="lg">
            <AdminLogo />
            <div className="sections">
                <AdminMenu />
                <AdminContent title={title} children={<AdminCreateContent />} />
            </div>
        </Container>
    )
}

export default AdminPageCreateContent