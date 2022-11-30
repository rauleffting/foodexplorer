import { Container } from './styles';

export function Input({ 
  label, 
  placeholder, 
  type, 
  value,
  onChange,
  ...rest }) {
  return(
    <Container>
      <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        {...rest}
      />
    </Container>
  );
}