import React, { useContext, useEffect, useState } from "react";
import TitleContentAdmin from "./TitleContentAdmin";

const AdminContent = ({ children, title }) => {

    return (
        <div className="r_section">
            <TitleContentAdmin title={title} />
            {children}
        </div>
    )
}

export default AdminContent