import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Container, Table, Button } from "react-bootstrap";
import { BiEditAlt } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';
import AccountSearchBar from "../../layout/AccountSearchBar";
import AccountUpdateModal from "../../common/AccountUpdateModal";
import AccountCreationModal from "../../common/AccountCreationModal";
const AccountDashboard = () => {
    const { accounts, user, accountLoading, deleteAccounts } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("name");
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const navigate = useNavigate();
    if (!user) {
        navigate("/");
    }
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleShowCreateModal = () => setShowCreateModal(true);
    const handleCloseCreateModal = () => setShowCreateModal(false);

    const handleShowUpdateModal = (account) => {
        setShowUpdateModal(true);
        setSelectedAccount(account);
    }

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedAccount(null);
    }
    const onRemove = (id) => {
        const result = window.confirm("Are you sure you want to remove this news?");
        if (!result) return;
        deleteAccounts(id);
    };

    if (accountLoading) {
        return <p>Loading...</p>
    } else {
        const filteredAccounts = accounts.filter((account) => {
            if (filterBy === "name") {
                if (account.AccountName.toLowerCase().includes(searchTerm.toLowerCase()))
                    return account
            }
            if (filterBy === "email") {
                if (account.AccountEmail.toLowerCase().includes(searchTerm.toLowerCase()))
                    return account
            }
            if (filterBy === "role")
                if (account.AccountRole.toLowerCase().includes(searchTerm.toLowerCase()))
                    return account
        })
        return (
            <Container className="mt-5">
                <div className="d-flex justify-content-end">
                    <Button className="mx-2" style={{ backgroundColor: "#0a4e7bff" }} onClick={handleShowCreateModal}>Create Account</Button>
                    <AccountSearchBar searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        filterBy={filterBy}
                        onFilterChange={setFilterBy} />
                </div>
                <h2>Accounts Dashboard</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Account Name</th>
                            <th>Account Email</th>
                            <th>AccountRole</th>
                            <th style={{ width: "10%" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredAccounts.map((account) => (
                                <tr key={account.AccountID}>
                                    <td>{account.AccountID}</td>
                                    <td>{account.AccountName}</td>
                                    <td>{account.AccountEmail}</td>
                                    <td>{account.AccountRole}</td>
                                    <td style={{ display: "flex", gap: "10px" }}>
                                        <Button
                                            style={{ background: "#0a4e7bff", border: "none" }}
                                            size="sm"
                                            onClick={() => handleShowUpdateModal(account)}
                                        >
                                            <BiEditAlt /> Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => onRemove(account.AccountID)}
                                        >
                                            <FaRegTrashAlt /> Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                {selectedAccount && (
                    <AccountUpdateModal
                        showModal={showUpdateModal}
                        account={selectedAccount}
                        handlecloseModal={handleCloseUpdateModal}
                    />
                )}
                <AccountCreationModal
                    showModal={showCreateModal}
                    handlecloseModal={handleCloseCreateModal}
                />
            </Container>
        );
    }
}
export default AccountDashboard;