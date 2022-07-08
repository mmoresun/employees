
import './employees-list-item.css';


const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, starSwitch } = props;
    
    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {

        classNames += ' increase';
    }

    if (starSwitch) {

        classNames += ' like';
    }

    return (

        <li className={classNames}>

            <span

                className="list-group-item-label"
                onClick={onToggleIncrease}   // функция "отправить на повышение"

            >
                {name}

            </span>

            <input

                type="text"
                className="list-group-item-input"
                defaultValue={'$' + salary}

            />

            <div className='d-flex justify-content-center align-items-center'>

                <button type="button"

                    className="btn-cookie btn-sm "
                    onClick={onToggleRise} // функция "выдать премию"
                    
                >

                    <i className="fas fa-cookie"></i>

                </button>

                <button type="button"

                    className="btn-trash btn-sm "
                    onClick={onDelete}>

                    <i className="fas fa-trash"></i>

                </button>

                <i className="fas fa-star"></i>

            </div>
        </li>
    )

}

export default EmployeesListItem;