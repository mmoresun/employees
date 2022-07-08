
import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item; // здесь мы выделяем из массива свойство item и объединяем всё, кроме него, в itemProps

        return (

            <EmployeesListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}

            /> 
            
            // сюда подтягиваются данные из массива data (в app.js), который перебирается методом .map - и на выходе получается массив elements, каждый элемент которого обёрнут в тег EmployeesListItem

            // а в EmployeesListItem каждое значение name и salary подставляются в нужные теги 

            // вместо  {...item}  можно написать name={item.name} salary={item.salary} и другие свойства - это такой оператор, который разворачивает объект
        )

    })
//           потом elements внутри тега EmployeesListItem возвращается сколько нужно раз (по числу элементов массива) в EmployeesList:
    return (

        <ul className="app-list list-group"> 

            {elements}             

        </ul>
    )
}

export default EmployeesList;

