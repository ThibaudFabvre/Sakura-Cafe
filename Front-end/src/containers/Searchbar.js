/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Searchbar from 'src/components/Main/Products/Searchbar';

// Action Creators
import { changeInput } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  searchbarValue: state.searchbar__input,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  changeInput: (value, id) => {
    dispatch(changeInput(value, id));
  },
});

// Container
const SearchbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searchbar);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default SearchbarContainer;
