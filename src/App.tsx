import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class App extends React.Component<{}, { selectedGoods: string[] }> {
  state = {
    selectedGoods: ['Jam'],
  };

  removeGood = (good: string) => {
    const goods = this.state.selectedGoods.filter((item) => item !== good);

    this.setState({
      selectedGoods: [...goods],
    });
  };

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, good],
    });
  };

  strOfGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `Selected goods: ${selectedGoods.join(', ')} is selected`;

      case 2:
        return `Selected goods: ${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `Selected goods: ${selectedGoods.slice(0, -1).join(', ')} `
          + `and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  clearAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {this.strOfGoods()}
          <button
            className={
              selectedGoods.length > 0
                ? 'app__btn--clear'
                : 'app__btn--none'
            }
            type="button"
            onClick={() => this.clearAll()}
          >
            clear
          </button>
        </h1>
        <ul className="app__list">
          {goodsFromServer.map((good) => (
            <li className="app__item" key={good}>
              {good}
              {selectedGoods.includes(good)
                ? (
                  <button
                    className="app__btn--remove"
                    type="button"
                    onClick={() => this.removeGood(good)}
                  >
                    X
                  </button>
                )
                : (
                  <button
                    className="app__btn--add"
                    type="button"
                    onClick={() => this.addGood(good)}
                  >
                    add
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// const App: React.FC = () => (
//   <div className="App">
//     <h1>Selected good</h1>
//     {goodsFromServer.length}
//   </div>
// );

export default App;
