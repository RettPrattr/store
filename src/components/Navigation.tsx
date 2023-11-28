import {Link} from 'react-router-dom'
import { GiAbstract024 } from 'react-icons/gi'
import { Basket } from '../features/header-panel/panel-items/Basket'
import { Notify } from '../features/header-panel/panel-items/Notify'
import { UserProfile } from '../features/header-panel/panel-items/UserProfile'
import { Home } from '../features/header-panel/panel-items/Home'

export const Navigation = () => {
    return (
        <div className='flex justify-between h-[50px] px-5 mx-8 my-4'>
            <span className="font-bold text-4xl text-clr-main text-primary"><GiAbstract024 /></span> 
            <div className='flex'>
                <Link to="/">
                    <Home />
                    </Link>
                
                <Link to="/favourites">
                    <Basket />
                </Link>
                    <Notify />
                    <UserProfile />
                </div>
        </div>
    )
}