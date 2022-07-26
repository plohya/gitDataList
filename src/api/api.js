import axios from "axios";
import {setRepos, setIsFetching} from "../state/reposReducer";

export const getRepos = (searchQuery = 'stars:%3E1') => {
   if(searchQuery == '') {
       searchQuery = 'stars:%3E1'
   }
    console.log(searchQuery)
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
        dispatch(setRepos(response.data));
    }
}