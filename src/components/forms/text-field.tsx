import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Input } from 'components/forms/input';
const FieldWrapper = styled.div`
  textarea {
    height: auto;
    min-height: 171px;
    padding-top: 15px;
    resize: none;
  }
`;

const InputFeedback = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.secondary.hover', '#FF282F')};
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

type Props = {
  type?: string;
  id: string;
  label?: string;
  error?: string;
  value: string;
  onChange: (key: any) => void;
  className?: string;
  [key: string]: unknown;
};
const TextField: React.FC<Props> = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <FieldWrapper>
      {label && (
        <label className='label' htmlFor={id}>
          {label}
        </label>
      )}

      <Input id={id} type={type} value={value} onChange={onChange} {...props} />
      {error && <InputFeedback>{error}</InputFeedback>}
    </FieldWrapper>
  );
};

export default TextField;
