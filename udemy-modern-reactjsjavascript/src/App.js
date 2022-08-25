import React, { Component } from 'react'
import axios from 'axios';
import Loading from './Loading';

 class App extends Component {
  constructor(props){
    super(props)
    //creating state
    this.state={
      users: [],
      loading: false
    };
    //bind any funcion once created newly
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUser(){
    this.setState({
      loading: true
    })
    axios('https://randomuser.me/api/').then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    })
   );
  }

   componentWillMount() {
      this.getUser();
   }

   handleSubmit(e) {
      console.log("more loading users")
      e.preventDefault();
      this.getUser();
   }

  render() {

    const loadingError = "Data is Loading Yet";
    const { loading , users } = this.state;

    return (
      <div className='App'>
         <form onSubmit={this.handleSubmit}>
              <input type="submit" value="loadusers"/>
          </form>
          <hr/>
        {console.log("true",this.state.loading)}
        {!loading 
          ? users.map(user => (
            <div key={user.id.value}>
            {console.log("dem",this.state.loading)}
            <h3 style={{color: 'red'}}>{user.name.title}</h3>
            <p>{user.email}</p>
            <p>{user.gender}</p>
            <p>{user.location.city}</p>
            <p>{user.location.coordinates.longitude}</p>
            <p>{user.location.coordinates.latitude}</p>
            <p>{user.location.country}</p>
            <p>{user.location.postcode}</p>
            <hr/>
          </div>
        )) : <Loading message={loadingError}/>}
      </div>
    );
  }
}

export default App;

