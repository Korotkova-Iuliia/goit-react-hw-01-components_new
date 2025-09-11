import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  margin: 20px auto;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
`;

export const AvatarDescription = styled.div`
  margin: 20px auto;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: #777;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #555;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #777;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
