import styled from '@emotion/styled';
import { ReactNode } from 'react';

type OwnProps = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

const StyledButton = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;

  justify-content: center;

  padding: ${(props) => props.theme.spacing(2)};
  border-radius: 4px;
  transition: background 0.1s ease;

  &:hover {
    background: ${(props) => props.theme.tertiaryBackground};
  }
`;

const StyledButtonLabel = styled.div`
  margin-left: ${(props) => props.theme.spacing(2)};
  font-weight: 500;
`;

export function EntityTableActionBarButton({ label, icon, onClick }: OwnProps) {
  return (
    <StyledButton onClick={onClick}>
      {icon}
      <StyledButtonLabel>{label}</StyledButtonLabel>
    </StyledButton>
  );
}
