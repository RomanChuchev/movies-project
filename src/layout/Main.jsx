import React, {Component} from "react"
import ErrorIndicator from "../components/error-indicator"
import { Movies } from "../components/Movies"
import Search from "../components/Search"
import Spinner from "../components/spinner"

export default class Main extends Component { 
   constructor() {
      super()

      this.state = {
         movies: [],
       hasError: false
      }

      this.searchMovies = this.searchMovies.bind(this)
   }

   componentDidMount() {
      fetch('http://www.omdbapi.com/?apikey=347de6a3&s=matrix')
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search}))
   }

   componentDidCatch() {
      this.setState({ hasError: true });
    }

   searchMovies(str) {
      fetch(`http://www.omdbapi.com/?apikey=347de6a3&s=${str}`)
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search}))   
   }

   render() {
   const {movies} = this.state

   if (this.state.hasError) {
      return <ErrorIndicator />
    }
      return (
         <main className="container content">
            <Search searchMovies={this.searchMovies}/>
         {
            movies.length ? 
            <Movies movies={this.state.movies} /> : 
            <Spinner />
         } 
         </main>
      )
   }
}

