import { Container, Box } from '@mui/material';
import AdminMenu from "../components/AdminMenu";
import AdminLogo from "../components/AdminLogo"
import AdminContent from "../components/AdminContent"
import AdminContentById from '../components/ListContents';
import { useParams } from "react-router-dom";

const AdminPageContentById = ({ title }) => {
    const params = useParams();
    const id = params.id

    console.log('get by id', id)

    return (

        <Container maxWidth="lg">
            <AdminLogo />
            <div className="sections">
                <AdminMenu />
                <AdminContent title={title} children={<AdminContentById />} />
            </div>
        </Container>
    )
}

export default AdminPageContentById