import React, { useEffect, useState } from 'react'

export const UsersList = () => {

    const API = 'https://reqres.in/api/users?';
    const [users, setUsers] = useState ([]);
    const [total_pages, setTotalPages] = useState (0);
    const [page, setPage] = useState (0);

    useEffect ( () => {

        fetch (API + new URLSearchParams ({page: page})).then ( res => res.json ()).then ( ({data, total_pages}) => {
            
            setUsers (data);
            setTotalPages (total_pages);
        });

    }, [page]);
    

    useEffect ( () => {
        setPage (1);
    }, [])


    const printPages = () => {

        let list = [];
        for (let num_page = 1; num_page <= total_pages; num_page++) {
            list.push (
                <li className="page-item" key={num_page}>
                    <button className="page-link" onClick={() => setPage (num_page)}>{num_page}</button>
                </li>
            );
        }
        
        return list;
    }

    return (
        <div className="main-content">
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className=''>Users list</h3>
                    </div>
                </div>
                {
                    users.length <= 0 && (
                        <h3>Loading users...</h3>
                    )
                }
                {
                    users.length > 0 && (
                        <div className="row">
                            {
                                users.map ( (user, index) => {
                                    
                                    return (
                                        <div className="col-md-3 mb-3" key={user.id}>
                                            <div className="card">
                                                    <img src={user.avatar} className="card-img-top" alt={user.first_name} />
                                                    <div className="card-body">
                                                        <p className="card-text">{user.first_name} {user.last_name}</p>
                                                    </div>
                                                </div>
                                        </div>                        
                                    )
                                })
                            }
                        </div>
                    )
                }
                {
                    (total_pages > 0)  && (
                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className={"page-item " + ((page <= 1) ? 'disabled' : '') }>
                                            <button className="page-link" onClick={() => setPage (page - 1)}>Previous</button>
                                        </li>
                                        {
                                            printPages (total_pages)
                                        }
                                        
                                        <li className={"page-item " + ((page > 1) ? 'disabled' : '')}>
                                            <button className="page-link" onClick={() => setPage (page + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
