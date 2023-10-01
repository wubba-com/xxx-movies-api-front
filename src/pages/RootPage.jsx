import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from '@mui/material';
import Root from "../components/Root";

const RootPage = ({ }) => {
    return (
        <Container maxWidth="lg">
            <Header />
            <Root />
        </Container>
    )
}

export default RootPage

