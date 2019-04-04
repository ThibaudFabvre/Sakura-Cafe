/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Products from 'src/components/Main/Products';

// Action Creators
import { getProductsList, getProductsCategories, addToCart } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null; o`u envoi tu en props la liste de fonction
 */
const mapStateToProps = state => ({

  productsList: state.productsList, 
  selectedProducts: state.products_selection,

  CategoryList: state.categoriesList,
  selectedCategories: state.category_selection,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  getProducts: () => {
    dispatch(getProductsList());
  },
  getCategories: () => {
    dispatch(getProductsCategories());
  },
});

// Container
const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default ProductsContainer;
