// import "./app-info.css";

// const AppInfo = () => {
//     return (
//         <div className="app-info">
//             <h1>Учет сотрудников в компании N</h1>
//             <h2>Общее число сотрудников:</h2>
//             <h2>Премию получат:</h2>
//         </div>
//     )
// }

// export default AppInfo;

import './app-info.css';
import App from '../app/app';

const AppInfo = ({employIncreased, employees}) => {  // в скобках берем пропсы из app.js

    return (
        <div className="app-info">

            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employees}</h2> 
            <h2>Премию получат: {employIncreased}</h2>           

        </div>

        // добавляем пропсы в строки "Общее число сотрудников" и "Премию получат"
    )

}

export default AppInfo;