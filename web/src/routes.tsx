import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            {/* exact só mostra a rota raiz se tiver somente a barra, sem isso a rota raiz aparece nos outros componentes também */}
            <Route path='/' exact component={Landing} />
            <Route path='/study' component={TeacherList} />
            <Route path='/give-classes' component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;
