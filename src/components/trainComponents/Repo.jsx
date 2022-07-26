import '../../style.scss';
import React from 'react';

const Repo = (props) => {

    const repo = props.repo

    return (
        <div className='repo'>
            <div className="repo-header">
                <div className="repo-header-name">
                    Название репозитория:
                    {repo.name}
                </div>
                <div className="repo-header-stars">
                    Количество звёзд:
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="repo-header">
                <div className="repo-last-commit">
                    Последнее обновление:
                    {repo.updated_at}
                </div>
                <a href={repo.html_url} className='repo-link'>Ссылка на репозиторий</a>
            </div>

        </div>
    );
};

export default Repo;