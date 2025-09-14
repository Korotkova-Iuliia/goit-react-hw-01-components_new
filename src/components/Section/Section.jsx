import * as S from './Section.styled';

function Section({ title, children }) {
  return (
    <S.Section>
      {title && <S.Title>{title}</S.Title>}
      {children}
    </S.Section>
  );
}

export default Section;
