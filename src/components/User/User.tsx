import { FC } from "react";
import styled from "styled-components";
import Typography from "../Typography/Typography";

export interface IUser {
  avatar: string;
  last_name: string;
  first_name: string;
  email: string;
  username: string;
  uid: string;
}

interface IDescription {
  dTitle: string;
  dDescription: string;
}

const User: FC<IUser> = ({
  email,
  username,
  avatar,
  last_name,
  first_name,
}): JSX.Element => {
  const descriptionItems: IDescription[] = [
    {
      dTitle: "Name",
      dDescription: `${last_name}, ${first_name}`,
    },
    {
      dTitle: "Username",
      dDescription: username,
    },
    {
      dTitle: "Email",
      dDescription: email,
    },
  ];

  const DescriptionItem: FC<IDescription> = ({
    dTitle,
    dDescription,
  }): JSX.Element => {
    return (
      <Grid>
        <DescriptionTitle as="dt">{dTitle}:</DescriptionTitle>
        <DescriptionBody as="dd">{dDescription}</DescriptionBody>
      </Grid>
    );
  };
  return (
    <StyledWrapper>
      <StyledImage src={avatar} />
      <Column>
        {descriptionItems.map((item) => (
          <DescriptionItem
            dTitle={item.dTitle}
            dDescription={item.dDescription}
            key={item.dTitle}
          />
        ))}
      </Column>
    </StyledWrapper>
  );
};

export default User;

const StyledWrapper = styled.dl`
  border-radius: 5px;
  border: 2px solid hotpink;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0.5rem;
`;

const DescriptionTitle = styled(Typography)`
  font-weight: 600;
  grid-column: 1;
  margin: 0;
`;

const DescriptionBody = styled(Typography)`
  grid-column: 2;
  margin: 0;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  border: 1px solid white;
  margin: 8px 16px;
  width: 10rem;
  min-width: 10rem;
  margin-bottom: 30px;
`;
