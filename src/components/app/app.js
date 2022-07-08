

import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {

      data: [

        { name: 'Anton', salary: 5000, increase: true, rise: false, id: 1 },
        { name: 'Andrew', salary: 800, increase: true, rise: false, id: 2 },
        { name: 'John', salary: 3000, increase: false, rise: false, id: 3 }
      ],

      term: '', // создаем запись в объекте data - это term, где будет храниться содержимое строки поиска
      filter: 'all' // создаем запись filter, значений может быть 3: "все сотрудники" (то есть ничего), на повышение и с зарплатой > 1000

    }

    this.maxId = 4;

  }

  // это метод удаления элемента из массива

  deleteItem = (id) => {

    this.setState(({ data }) => {

      // const index = data.findIndex(elem => elem.id == id); // находим индекс элемента (объекта) в массиве data

      // const before = data.slice(0, index);  // копируем часть массива data ДО искомого элемента в новый массив before
      // const after = data.slice(index + 1);  // копируем часть массива data ПОСЛЕ искомого элемента в новый массив after

      // const newArr = [...before, ...after] // создаем массив newArr, в котором нет искомого элемента, склеивая before и after

      // return { 
      //   data: newArr // возвращаем в data новый массив
      // }

      // но есть способ проще!

      return {

        data: data.filter(item => item.id !== id)
        // метод filter перебирает каждый объект внутри data и возвращает массив, в котором нет элемента, содержащего обозначенный нами id (то есть id элемента, на который мы нажали)
      }


    })

  }

  addItem = (name, salary) => {

    const newItem = {
      name,
      salary,
      increase: false,
      starSwitch: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {

      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });

  }

  // метод, который "ведет" сотрудника на повышение

  onToggleIncrease = (id) => {


    // // в скобках после setState описывается стрелочная функция, которая в скобках принимает аргумент в виде объекта {data}
    // this.setState(({data}) => {

    //   const index = data.findIndex(elem => elem.id == id); // получаем индекс элемента, с которым будем работать

    //   const old = data[index]; // получаем старый объект

    //   const newItem = {... old, increase: !old.increase}; // разворачиваем новый объект newItem из old и добавляем в него новый ключ increase, противоположный increase в old

    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // создаем массив от из data от 0 элемента до index (его значение находим ранее) и добавляем в него остаток от того же массива

    //   return {
    //     data: newArr
    //   }


    // })

    // Или способ короче:

    this.setState(({ data }) => ({ // стрелочная функция принимает аргумент {data} и вносит в него изменения

      data: data.map(item => { // натравляем на data метод map, который меняет каждый элемент массива (item) в соответствии с заданной функцией

        if (item.id == id) // если мы нашли нужный нам объект, то возвращаем его же с добавками:

        {

          return { ...item, increase: !item.increase } // а именно - добавляем в него "не increase", то есть меняем increase: true на increase: false и наоборот

        }

        return item; // возвращаем старый элемент, если if не выполнился

      })

    }))

  }

  onToggleRise = (id) => { // добавляет звездочку (сотрудник идет на повышение)

    this.setState(({ data }) => ({

      data: data.map(item => {

        if (item.id == id) {

          return {  

            ...item, starSwitch: !item.starSwitch,
            rise: !item.rise

          }
        }

        return item; // возвращаем старый элемент, если if не выполнился

      })

    }))

  }

  searchEmp = (items, term) => { // создам метод для поиска - это стрелочная функция, которая принимает два аргумента: строчка, которую мы ищем, и массив данных, который мы фильтруем (items)

    if (term.length === 0) {  // если пользователь ничего не ввел (или ввел и удалил), то есть term.length равно 0,
      return items;  // то возвращать обратно весь массив 
    }

    return items.filter(item => { // в противном случае берем массив (item) и фильтруем его по условию:

      return item.name.indexOf(term) > -1  // метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. то есть мы ищем в массиве то, что хранится в объекте term (который мы получили из поисковой строки), и получаем индекc этого элемента

      // дальше эти данные надо будет отобразить 

    })

  }

  onUpdateSearch = (term) => { // создаем метод, который забирает term из search-panel и устанавливает состояние "term" для записи term в нашем state

    this.setState({ term });

  }

  filterPost = (items, filter) => {

    switch (filter) {

      case 'increase':  // если фильтр 'rise', то возвращаем список сотрудников на повышение
        return items.filter(item => item.increase);  // возвращаем отфильтрованный массив, где есть только те элементы, у которых значение increase == true

      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);

      default:
        return items;

    }
  }

  onFilterSelect = (filter) => {

    this.setState({
      filter
    });


  }

  render() {

    const { data, term, filter } = this.state; // передаем term и data в state и сохраняем

    // const visibleData = this.searchEmp(data, term); переменная, которая хранит уже отфильтрованный массив (получившийся в результате "нападения" функции searchEmp на массив data по ключевому слову term) - ее мы передадим в тег EmployeesList в качестве переменной для data

    const visibleData = this.filterPost(this.searchEmp(data, term), filter); // модернизированная visibleData, которая сначала применяет метод filterPost, а потом searchEmp, таким образом можно комбинировать сразу два типа фильтрафии - сначала по имени (searchEmp), а потом по зарплате/повышению

    const employees = this.state.data.length; // посчитали число сотрудников

    const employIncreased = this.state.data.filter(item => item.rise).length //метод filter перебирает наш массив и возвращает новый, где есть только те элементы, для которых increase: true, это список сотрудников на повышение. добавляем length - получаем число сотрудников на повышение

    return (

      <div className="app">

        <AppInfo

          employees={employees}
          employIncreased={employIncreased}

        // добавляем employees и employIncreased в тег AppInfo - это будут пропсы (для app-info.js)
        />

        <div className='search-panel'>

          <SearchPanel
            onUpdateSearch={this.onUpdateSearch} // прописываем в панели поиска вызов метода onUpdateSearch, устанавливающий состояние для term внутри state
          />

          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />

        </div>

        <EmployeesList

          data={visibleData} // передали в EmployeesList массив data, описанный выше
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />

        <EmployeesAddForm

          onAdd={this.addItem} // 
        />

      </div>
    )
  }
}

export default App;