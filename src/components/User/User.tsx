import { FC } from "react";
import styled from "styled-components";
import Typography from "../../Typography/Typography";

interface IUser {
  image: string;
  lastName: string;
  firstName: string;
  email: string;
  userName: string;
}

const User: FC<IUser> = ({
  image,
  lastName,
  firstName,
  email,
  userName,
}): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledImage src={image} />
      <Typography as="h3">{`${lastName}, ${firstName}`}</Typography>
      <Typography>Username: {userName}</Typography>
      <Typography>Email: {email}</Typography>
    </StyledWrapper>
  );
};

export default User;

const StyledWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid hotpink;
  padding: 40px 20px;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  border: 1px solid white;
  margin: 8px 16px;
`;
