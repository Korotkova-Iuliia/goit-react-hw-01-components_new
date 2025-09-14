import styled from 'styled-components';
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const Avatar = styled.img`
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0;
  text-transform: capitalize;
`;
