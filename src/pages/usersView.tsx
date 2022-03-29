import User, { IUser } from "../components/User/User";
import { useUser } from "../services/useAPI";
import styled from "styled-components";
import Typography from "../components/Typography/Typography";

const UsersView = () => {
  const { users, isLoading, isError } = useUser(6);

  return (
    <PageView>
      <Title as="h1">My galactic users</Title>
      <UsersWrapper>
        {!isLoading && !isError ? (
          users.map((user: IUser) => (
            <User
              avatar={user.avatar}
              last_name={user.last_name}
              first_name={user.first_name}
              email={user.email}
              username={user.username}
              uid={user.uid}
              key={user.uid}
            />
          ))
        ) : isError ? (
          <div> ERROR </div>
        ) : (
          <div>SPINNER</div>
        )}
      </UsersWrapper>
    </PageView>
  );
};

export default UsersView;

const Title = styled(Typography)`
  font-size: var(--font-size-title1);
  font-weight: 600;
`;

const PageView = styled.section`
  display: flex;
  flex-direction: column;
`;
const UsersWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;
