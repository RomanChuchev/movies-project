import React, {Component} from "react"
import { Movies } from "../components/Movies"
import Search from "../components/Search"
import Spinner from "../components/spinner"

export default class Main extends Component { 
   constructor() {
      super()

      this.state = {
         movies: [],
         loading: true
      }

      this.searchMovies = this.searchMovies.bind(this)
   }

   componentDidMount() {
      fetch(`http://www.omdbapi.com/?apikey=347de6a3&s=matrix`)
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search, loading: false}))
   }

   searchMovies(str, type = 'all') {
      this.setState({loading: true})
      fetch(`http://www.omdbapi.com/?apikey=347de6a3&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search, loading: false}))   
   }

   render() {
   const {movies, loading} = this.state


      return (
         <main className="container content">
            <Search searchMovies={this.searchMovies}/>
         { loading ? <Spinner /> : <Movies movies={movies} /> } 
         </main>
      )
   }
}

