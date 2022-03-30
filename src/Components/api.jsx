// import React, { Component } from 'react'
// import axios from 'axios';
// import UsersList from './UsersList';

// export default class api extends Component {
//     state = {
//       users: [],
//       page: 0,
//       isLoading: false,
//       errorMsg: ''
//     };
  
//     componentDidMount() {
//       this.loadUsers();
//     }
  
//     componentDidUpdate(prevProps, prevState) {
//       if (prevState.page !== this.state.page) {
//         this.loadUsers();
//       }
//     }
  
//     loadUsers = async () => {
//       try {
//         const { page } = this.state;
  
//         this.setState({ isLoading: true });
//         const response = await axios.get(
//           `https://randomuser.me/api/?page=${page}&results=10`
//         );
  
//         this.setState((prevState) => ({
//           users: [...prevState.users, ...response.data.results],
//           errorMsg: ''
//         }));
//       } catch (error) {
//         this.setState({
//           errorMsg: 'Error while loading data. Try again later.'
//         });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     };
  
//     loadMore = () => {
//       this.setState((prevState) => ({
//         page: prevState.page + 1
//       }));
//     };
  
//     render() {
//       const { users, isLoading, errorMsg } = this.state;
  
//       return (
//         <div className="main-section">
//           <UsersList users={users} />
//           {errorMsg && <p className="errorMsg">{errorMsg}</p>}
//           <div className="load-more">
//             <button onClick={this.loadMore} className="btn-grad">
//               {isLoading ? 'Loading...' : 'Load More'}
//             </button>
//           </div>
//         </div>
//       );
//     }
//   }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './UsersList';

const Api = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10`
        );

        setUsers([...users, ...response.data.results]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="main-section">
      <UsersList users={users} />
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <div className="load-more">
        <button onClick={loadMore} className="btn-grad">
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Api;