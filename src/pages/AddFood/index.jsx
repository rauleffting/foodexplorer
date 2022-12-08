import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { RiUpload2Line, RiArrowDownSLine } from 'react-icons/ri';

export function AddFood() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [pictureFile, setPictureFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  /* ingredients */
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

  /* picture */
  function handlePictureFile() {
    const file = event.target.files[0];
    setPictureFile(file);
  }

  /* add food */
  function handleAddFood() {
    if((category === 'selecionar') || !name || !ingredients || !price || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("picture", pictureFile);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))

    api.post("/foods", formData)
    .then(() => {
      alert("Prato criado com sucesso!");
      navigate(-1);
    })
  }

  return(
    <Container>
      <Header />

      <Content className="content">
        <ButtonBack />

        <Form>
          <header>
            Criar novo prato
          </header>

          <fieldset className="desktop">
            <div className="input-wrapper">
              <div className="small-input" id="picture-input">
                <span>Imagem do prato</span>
                <label htmlFor="food-picture">
                  <RiUpload2Line />
                  <input 
                    type="file" 
                    id="food-picture" 
                    onChange={handlePictureFile}
                  />
                  <span>Selecionar imagem</span>
                </label>
              </div>

              <div className="small-input">
                <label for="category">Categoria</label>
                <select 
                  id="category" 
                  name="category"
                  onChange={ event => setCategory(event.target.value)}
                >
                  <option value="selecionar">Selecionar</option>
                  <option value="prato_principal">Prato principal</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebida</option>
                </select>
              </div>

              <div className="big-input">
                <Input 
                  label="Nome"
                  placeholder="Ex.: Salada Ceasar"
                  type="text"
                  onChange={ event => setName(event.target.value) }
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
                        width={ingredient.length + 0.4}
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
                  onChange={ event => setPrice(event.target.value) }
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
                onChange={ event => setDescription(event.target.value) }
                />
            </div>
          </fieldset>

          <fieldset className="mobile">
            <div className="small-input" id="picture-input">
              <span>Imagem do prato</span>
              <label htmlFor="food-picture">
                <RiUpload2Line />
                <input 
                  type="file" 
                  id="food-picture" 
                  onChange={handlePictureFile}
                />
                <span>Selecionar imagem</span>
              </label>
            </div>

            <div className="small-input">
              <label for="category">Categoria</label>
              <select 
                id="category" 
                name="category"
                onChange={ event => setCategory(event.target.value)}
              >
                <option value="selecionar">Selecionar</option>
                <option value="prato_principal">Prato principal</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>

            <div className="big-input">
              <Input 
                label="Nome"
                placeholder="Ex.: Salada Ceasar"
                type="text"
                onChange={ event => setName(event.target.value) }
              />
            </div>
              
            <div className="big-input">
              <span>Ingredientes</span>
              <div id="ingredient-input">
                {
                  ingredients.map((ingredient, index) => (
                    <FoodItem 
                      key={String(index)}
                      value={ingredient}
                      width={ingredient.length + 0.4}
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
                onChange={ event => setPrice(event.target.value) }
              />
            </div>
              

            <div className="text-area">
                <label>Descrição</label>
                <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={ event => setDescription(event.target.value) }
                />
            </div>
          </fieldset>
          
          <div className="button-wrapper">
            <Button
              onClick={handleAddFood}
            >
            <span>Criar</span> 
            </Button>
          </div>
        </Form>

        <Footer />
      </Content>
    </Container>
  );
}