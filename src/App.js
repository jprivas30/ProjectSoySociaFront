import React from 'react';
import { NavBar, Footer} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AbilityView, EventsView, FormRegisterView, ForumView, HomeView, NewsView, PartnerView, ToolView } from './views';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomeView />}></Route>
                <Route path='/Forum' element={<ForumView/>}></Route>
                <Route path='/Partner' element={<PartnerView/>}></Route>
                <Route path='/Ability' element={<AbilityView/>}></Route>
                <Route path='/Event' element={<EventsView/>}></Route>
                <Route path='/Register' element={<FormRegisterView/>}></Route>
                <Route path='/News' element={<NewsView/>}></Route>
                <Route path='/Tool' element={<ToolView/>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
        </div>
    )
}

export default App;