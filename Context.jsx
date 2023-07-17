import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
const AppContext = createContext()


const reducer = (state , action)=>{
    switch(action.type){
        case 'ADD_TO_MOVIE':
            return{
                ...state,
                items:[...state.items , action.payload]
            }
        case 'REMOVE_FROM_HEART':
            return{
                ...state,
                items: state.items.filter(
                    (item)=> item.id !== action.payload
                )
            }
        default:
            return state
    }
    
}

const AppProvider = ({children})=>{

    const initialState = {
        items : [],
    }

        
const [state , dispatch] = useReducer(reducer , initialState)

    return(
    <AppContext.Provider value={{cart : state.items , dispatch}}>
        {children}
    </AppContext.Provider>
)}
AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export {AppContext , AppProvider}
