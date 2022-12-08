import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { FoodItem } from '../../components/FoodItem';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import { RiUpload2Line } from 'react-icons/ri';

export function EditFood() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState(null)

  const [category, setCategory] = useState("");
  const [pictureFile, setPictureFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [width, setWidth] = useState(13);
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      const { category, picture, name, price, description, ingredients } = response.data
      setCategory(category);
      setPictureFile(picture);
      setName(name);
      setPrice(price);
      setDescription(description);
      setIngredients(ingredients.map(ingredient => ingredient.name));
    }

    fetchFood();
  }, []);

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

  function handleEditFood() {
    if((category === 'selecionar') || !name || !ingredients || !price || !description) {
      alert("Preencha todos os campos!");
      return;
    }

    api.put(`/foods/${params.id}`, { category, name, price, description, ingredients });
    
    const formData = new FormData();
    formData.append("picture", pictureFile);

    api.patch(`/foods/picture/${params.id}`, formData)
    .then(() => {
      alert("Prato editado com sucesso!");
      navigate(-1);
    });
  }

  function handleDelete() {
    alert('Deseja mesmo deletar?');

    alert('Prato deletado com sucesso');
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
                  value={name}
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
                  value={price}
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
                value={description}
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