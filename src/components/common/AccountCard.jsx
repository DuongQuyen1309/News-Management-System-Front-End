const AccountCard = ({ user }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{user.AccountID}</Card.Title>
                <Card.Text>
                    Name: {user.AccountName}
                    Email: {user.AccountEmail}
                    Role: {user.AccountRole}
                    Password: {user.AccountPassword}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default AccountCard;