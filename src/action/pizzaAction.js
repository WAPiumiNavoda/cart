import axios from 'axios';


export  const getAllPizza = () =>dispatch => {
    dispatch({type:'GET_PIZZA_REQUEST'})
    try {
        const res = axios.get('./api/pizzas/getPizza')
        console.log(res);
        dispatch({type:'GET_PIZZA_SUCCESS', payload:res.data})
    } catch (err) {
        dispatch({type:'GET_PIZZA_FAIL',payload:err})
    }
}