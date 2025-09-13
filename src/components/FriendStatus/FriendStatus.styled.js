import styled from 'styled-components';

// Общие стили для статуса
export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BaseStatus = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`;

// Варианты цвета
export const Online = styled(BaseStatus)`
  background-color: green;
`;

export const Offline = styled(BaseStatus)`
  background-color: red;
`;
