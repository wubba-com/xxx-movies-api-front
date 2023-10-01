import React, { useContext, useEffect, useState } from "react";
import { Container, Box } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AdminMenu from "../components/AdminMenu";
import AdminLogo from "../components/AdminLogo"
import ListContents from "../components/ListContents";
import AdminContent from "../components/AdminContent"

const AdminPageRootContent = ({ title }) => {

    return (
        <Container maxWidth="lg">
            <AdminLogo />
            <div className="sections">
                <AdminMenu />
                <AdminContent title={title} children={<ListContents />} />
            </div>
        </Container>
    )
}

export default AdminPageRootContent