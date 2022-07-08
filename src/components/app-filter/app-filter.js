
import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [

        { name: 'all', label: 'Все сотрудники' },
        { name: 'increase', label: 'На повышение' },
        { name: 'moreThan1000', label: 'Зарплата больше $1000' }
    ]

    const buttons = buttonsData.map(({ name, label }) => {

        const active = props.filter === name; // если значение props.filter равно name, то возвращаем true, если нет - false
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (

            <button
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}

            </button>
        )

    })

    return (
        <div className="btn-group">

        {buttons}

            {/* <button
                className="btn btn-light"
                type='button'>
                Все сотрудники
            </button>

            <button
                className="btn btn-outline-light"
                type='button'>
                На повышение
            </button>

            <button
                className="btn btn-outline-light"
                type='button'>
                Зарплата больше $1000
            </button> */}

        </div>

    )
}

export default AppFilter;