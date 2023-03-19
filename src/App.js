import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';
const App = () => {
  console.log('render');
  const [searchField, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchString(searchFieldString);
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>

  );
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users };
//         },
//         () => {
//           console.log(this.state);
//         }

//       ))
//   }
//   onSearchChange = (event) => {

//     const searchField = event.target.value.toLowerCase();
//     this.setState(
//       () => {
//         return { searchField };
//       })

//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
