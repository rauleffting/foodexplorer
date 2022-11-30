import { useState } from 'react';

import { Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { RiUpload2Line } from 'react-icons/ri';

export function EditFood() {
  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  function handleChange(event) {
    setWidth(event.target.value.length + 0.4);
    setNewIngredient(event.target.value)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
    setWidth(10);
  }

  function handleRemove(removedIngredient) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient != removedIngredient))
  }

  function handleEditFood() {
    alert('Prato editado com sucesso!')
  }

  function handleDelete() {
    alert('Prato deletado com sucesso!')
  }

  return(
    <Container>
      <Header />

      <Content className="content">
        <ButtonBack />

        <Form>
          <header>
            Editar prato
          </header>

          <fieldset>
            <div className="input-wrapper">
              <div className="small-input" id="picture-input">
                <span>Imagem do prato</span>
                <label htmlFor="food-picture">
                  <RiUpload2Line />
                  <input 
                    type="file" 
                    id="food-picture" 
                    onChange={() => {}}
                  />
                  <span>Selecionar imagem</span>
                </label>
              </div>

              <div className="big-input">
                <Input 
                  label="Nome"
                  placeholder="Ex.: Salada Ceasar"
                  type="text"
                />
              </div>
            </div>
              
            <div className="input-wrapper">
              <div className="big-input">
                <span>Ingredientes</span>
                <div id="ingredient-input">
                  {
                    ingredients.map((ingredient, index) => (
                      <FoodItem 
                        key={String(index)}
                        value={ingredient}
                        width={ingredient.length}
                        onClick={() => handleRemove(ingredient)}
                      />
                    ))
                  }
                  <FoodItem 
                    isNew
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange={ handleChange }
                    onClick={ handleAddIngredient }
                    width={width}
                  />
                </div>
              </div>

              <div className="small-input">
                <Input 
                  label="Preço"
                  placeholder="R$ 00,00"
                  type="text"
                />
              </div>
            </div>
              

            <div className="text-area">
                <label>Descrição</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                />
            </div>
          </fieldset>
          
          <div className="button-wrapper">
            <Button
              onClick={handleDelete}
              isRed
            >
              <span>Deletar prato</span> 
            </Button>     

            <Button
              onClick={handleEditFood}
            >
              <span>Editar prato</span> 
            </Button>
          </div>
        </Form>

        <Footer />
      </Content>
    </Container>
  );
}