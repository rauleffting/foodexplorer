import { useState } from 'react';
import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'

export function FoodItem({ isNew, value, onClick, width, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
        style={{ width: width +'ch'}}
      />
      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete'}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  );
}