import styled from '@emotion/styled';
import { useRef, ReactNode } from 'react';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';
import { modalBackground } from '../../../layout/styles/themes';
import { FaAngleDown } from 'react-icons/fa';

type OwnProps = {
  label: string;
  isActive: boolean;
  children?: ReactNode;
  isUnfolded?: boolean;
  setIsUnfolded?: React.Dispatch<React.SetStateAction<boolean>>;
  resetState?: () => void;
};

const StyledDropdownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

type StyledDropdownButtonProps = {
  isUnfolded: boolean;
  isActive: boolean;
};

const StyledDropdownButton = styled.div<StyledDropdownButtonProps>`
  display: flex;
  margin-left: ${(props) => props.theme.spacing(3)};
  cursor: pointer;
  user-select: none;
  background: ${(props) => props.theme.primaryBackground};
  color: ${(props) => (props.isActive ? props.theme.blue : 'none')};
  padding: ${(props) => props.theme.spacing(1)};
  border-radius: 4px;
  filter: ${(props) => (props.isUnfolded ? 'brightness(0.95)' : 'none')};

  &:hover {
    filter: brightness(0.95);
  }
`;

const StyledDropdown = styled.ul`
  --wraper-border: 1px;
  --wraper-border-radius: 8px;
  --outer-border-radius: calc(var(--wraper-border-radius) - 2px);

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 14px;
  right: 0;
  border: var(--wraper-border) solid ${(props) => props.theme.primaryBorder};
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  border-radius: var(--wraper-border-radius);
  padding: 0px;
  min-width: 160px;
  ${modalBackground}
  li {
    border-radius: 2px;

    &:first-of-type {
      border-top-left-radius: var(--outer-border-radius);
      border-top-right-radius: var(--outer-border-radius);
    }
    &:last-of-type {
      border-bottom-left-radius: var(--outer-border-radius);
      border-bottom-right-radius: var(--outer-border-radius);
    }
  }
`;

const StyledDropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)}
    calc(${(props) => props.theme.spacing(2)} - 2px);
  margin: 2px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.text60};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const StyledDropdownTopOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(${(props) => props.theme.spacing(2)} + 2px)
    calc(${(props) => props.theme.spacing(2)});
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.text60};
  font-weight: ${(props) => props.theme.fontWeightBold};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  border-radius: 0%;
  border-bottom: 1px solid ${(props) => props.theme.primaryBorder};
`;

const StyledIcon = styled.div`
  display: flex;
  margin-right: ${(props) => props.theme.spacing(1)};
  min-width: ${(props) => props.theme.spacing(4)};
  justify-content: center;
`;

const StyledSearchField = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.text60};
  font-weight: ${(props) => props.theme.fontWeightBold};

  border-radius: 0%;
  border-bottom: 1px solid ${(props) => props.theme.primaryBorder};
  input {
    height: 36px;
    width: 100%;
    border: none;
    padding: 8px;
    box-sizing: border-box;
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  }
  input::placeholder {
    color: ${(props) => props.theme.text40};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
`;

function DropdownButton({
  label,
  isActive,
  children,
  isUnfolded = false,
  setIsUnfolded,
  resetState,
}: OwnProps) {
  const onButtonClick = () => {
    setIsUnfolded && setIsUnfolded(!isUnfolded);
  };

  const onOutsideClick = () => {
    setIsUnfolded && setIsUnfolded(false);
    resetState && resetState();
  };

  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, onOutsideClick);

  return (
    <StyledDropdownButtonContainer>
      <StyledDropdownButton
        isUnfolded={isUnfolded}
        onClick={onButtonClick}
        isActive={isActive}
        aria-selected={isActive}
      >
        {label}
      </StyledDropdownButton>
      {isUnfolded && (
        <StyledDropdown ref={dropdownRef}>{children}</StyledDropdown>
      )}
    </StyledDropdownButtonContainer>
  );
}

const StyleAngleDownContainer = styled.div`
  margin-left: auto;
`;

function DropdownTopOptionAngleDown() {
  return (
    <StyleAngleDownContainer>
      <FaAngleDown />
    </StyleAngleDownContainer>
  );
}
DropdownButton.StyledDropdownItem = StyledDropdownItem;
DropdownButton.StyledSearchField = StyledSearchField;
DropdownButton.StyledDropdownTopOption = StyledDropdownTopOption;
DropdownButton.StyledDropdownTopOptionAngleDown = DropdownTopOptionAngleDown;
DropdownButton.StyledIcon = StyledIcon;

export default DropdownButton;
