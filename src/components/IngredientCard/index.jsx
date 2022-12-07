import { Container } from './styles';

import alface from  '../../assets/ingredients/alface.png';
import ameixa from  '../../assets/ingredients/ameixa.png';
import amendoas from  '../../assets/ingredients/amendoas.png';
import aniz from  '../../assets/ingredients/aniz.png';
import cafe from  '../../assets/ingredients/cafe.png';
import camarao from  '../../assets/ingredients/camarao.png';
import canela from  '../../assets/ingredients/canela.png';
import claras from  '../../assets/ingredients/claras.png';
import damasco from  '../../assets/ingredients/damasco.png';
import farinha from  '../../assets/ingredients/farinha.png';
import limao from  '../../assets/ingredients/limao.png';
import maca from  '../../assets/ingredients/maca.png';
import maracuja from  '../../assets/ingredients/maracuja.png';
import massa from  '../../assets/ingredients/massa.png';
import paonaan from  '../../assets/ingredients/paonaan.png';
import pao from '../../assets/ingredients/pao.png';
import pepino from  '../../assets/ingredients/pepino.png';
import pessego from  '../../assets/ingredients/pessego.png';
import pesto from  '../../assets/ingredients/pesto.png';
import presunto from '../../assets/ingredients/presunto.png';
import rabanete from  '../../assets/ingredients/rabanete.png';
import rucula from '../../assets/ingredients/rucula.png';
import tomate from '../../assets/ingredients/tomate.png';
import whiskey from '../../assets/ingredients/rucula.png';

export function IngredientCard({name}){
    let ingredientName = String(name.trim('').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    let ingredientPicture;

    function fetchIngredientPicture(){
      switch(ingredientName){
        case "alface":
          return ingredientPicture = alface;
        case "ameixa":
          return ingredientPicture = ameixa;
        case "amendoas":
          return ingredientPicture = amendoas;  
        case "aniz":
          return ingredientPicture = aniz; 
        case "cafe":
          return ingredientPicture = cafe; 
        case "camarao":
          return ingredientPicture = camarao; 
        case "canela":
          return ingredientPicture = canela;
        case "claras":
          return ingredientPicture = claras;
        case "damasco":
          return ingredientPicture = damasco;
        case "farinha":
          return ingredientPicture = farinha;
        case "limao":
          return ingredientPicture = limao;
        case "maca":
          return ingredientPicture = maca;
        case "maracuja":
          return ingredientPicture = maracuja;
        case "massa":
          return ingredientPicture = massa;
        case "pao naan":
          return ingredientPicture = paonaan;
        case "pao":
          return ingredientPicture = pao;
        case "pepino":
          return ingredientPicture = pepino;
        case "pessego":
          return ingredientPicture = pessego;
        case "pesto":
          return ingredientPicture = pesto;
        case "presunto":
          return ingredientPicture = presunto;
        case "rabanete":
          return ingredientPicture = rabanete;
        case "rucula":
          return ingredientPicture = rucula;
        case "tomate":
          return ingredientPicture = tomate;
        case "whiskey":
          return ingredientPicture = whiskey;
      }
    }
    
    let searchPicture = fetchIngredientPicture(ingredientName);

  return(
    <Container>
      <img src={searchPicture} alt="ingredient picture" />
      <span>{name}</span>
    </Container>
  );
}