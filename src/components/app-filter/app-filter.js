
import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [

        { name: 'all', label: 'All employees' },
        { name: 'increase', label: 'Career promotion' },
        { name: 'moreThan1000', label: 'Salary more than $1000' }
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

        </div>

    )
}

export default AppFilter;