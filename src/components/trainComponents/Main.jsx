import React, {useEffect, useState} from 'react';
import '../../style.scss';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../api/api";
import Repo from "./Repo";

const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.isFetching)
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className='search-input' placeholder='Enter repository name'/>
                <button onClick={() => searchHandler()} className="search-btn">Search</button>
            </div>
            {!isFetching ?
                repos.map((repo, index) =>
                    <Repo key={index} repo={repo}/>)
                :
                <div className='loader'/>
            }
        </div>
    );
};

export default Main;