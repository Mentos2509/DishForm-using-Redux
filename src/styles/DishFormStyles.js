import styled from "styled-components";

export const InputStyled = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.green};
  outline: 0;
  border-radius: 0.7rem;
  display: block;
  width: 100%;
  min-height: 5rem;
  font-size: ${({ theme }) => theme.sizes.s};
  margin-top: 0.5rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.light};
`;

export const FormRowStyled = styled.div`
  margin-top: 1.5rem;
`;

export const LabelStyled = styled.label`
  display: block;
  margin-bottom: .5rem;
`;

export const FormStyled = styled.form`
  max-width: 520px;
  width: 100%;
  margin: 50px auto;
`;

export const SelectStyled = styled.select`
  border: 2px solid ${({ theme }) => theme.colors.green};
  outline: 0;
  border-radius: 0.7rem;
  width: 100%;
  min-height: 5rem;
  font-size: ${({ theme }) => theme.sizes.s};
  margin-top: 0.5rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.light};
`;

export const ButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: ${({ theme }) => theme.weights.light};
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  width: 100%;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgb(132 165 140);
  }
`;

export const InfoStyled = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.sizes.xs};
  margin: 0.4rem 0 0 0;
`;

export const ContainerStyled = styled.div`
  padding: 0 1.5rem;
`;
