import styled from 'styled-components';

// Обёртка секции
export const Section = styled.section`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// Заголовок
export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
  color: #333;
`;

// Список статистики
export const StatList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Элемент списка
export const Item = styled.li`
  flex: 1 1 120px;
  padding: 12px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

// Лейбл и процент
