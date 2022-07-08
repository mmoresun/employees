

import './app-info.css';
import App from '../app/app';

const AppInfo = ({ employIncreased, employees }) => {  // в скобках берем пропсы из app.js

    return (
        <div className="app-info">

            <h1>Employees information</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Employees that will receive bonuses: {employIncreased}</h2>

        </div>

        // добавляем пропсы в строки "Общее число сотрудников" и "Премию получат"
    )

}

export default AppInfo;