import React from 'react'
import s from './App.module.css'
import HW5 from "../s2-homeworks/hw05/HW5";
import HW6 from "../s2-homeworks/hw06/HW6";
import HW7 from "../s2-homeworks/hw07/HW7";

function App() {
    return (
        <div className={s.App}>
    {/*        <HW1/>
            раскомментировать по ходу выполнения
            <HW2/>
            <HW3/>
            <HW4/>*/}
            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
            <HW6/>
            <HW7/>
        </div>
    )
}

export default App
