import * as React from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import { setDarkMode, setLightMode } from '../Slice';

import MaterialUISwitch from './MaterialSwitch';





  const ThemeSwitcher = () => {

    const dispatch = useDispatch();

    const theme = useSelector(state =>state.theme);

    const change_The_Theme = (e) =>
    {
        if(e.target.checked === true)

        {
            dispatch(setDarkMode())
        }
        else
        {
            dispatch(setLightMode())
        }
        
    }
  return (
    <div>
            
    
            <MaterialUISwitch  onChange={change_The_Theme} theme= {theme} />
           
    
    
    </div>
  )
}

export default ThemeSwitcher;