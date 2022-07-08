
import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {

        super(props);

        this.state = {

            term: '' // объект, которое передается из поля поиска (передаётся их search-panel.js), это состояние нужно будет "поднимать" в компонент App

           
        }
    }

    searchUpdate = (event) => {

        const term = event.target.value // записываем в term то, что введено в строку поиска       

        this.setState({ term }); // устанавливаем term, равный введённому тексту, для _локального_ state, чтобы потом передать его наверх в App

        this.props.onUpdateSearch(term); // "пробрасываем" term наверх в App, вызывая props, который нам пришел   
        // это называется "поднятие локального состояния родителю"

        // console.log('Сейчас в term в searchpanel' + this.state.term);

    }

    render() {

        return (

            <input

                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"

                value={this.state.term} // передаем term в качестве значения
                onChange={this.searchUpdate} // по событию onChange (набор текста) вызывается метод searchUpdate
            />
        )
    }

}

export default SearchPanel;