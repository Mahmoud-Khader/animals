import React from 'react';
import Header from './Companent/Header';
import Footer from './Companent/Footer';
import Main from './Companent/Main';
import data from './data.json';
import SelectedBeast from './Companent/SelectedBeast';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showModel: false,
      Allanimals: data,
      chosenAnimal: {}
    }
  }
 

  renderModel = (title) => {
    let chosen = data.find(animal => {
      if (animal.title === title) {
        return animal;
      }
      // return chosen;

    })

    this.setState({
     
      chosenAnimal: chosen
    })
    

  }
  

  handleClose = () => {
    console.log('Hello from handleClose')
    console.log(this.state.chosenAnimal)
    this.setState({
      showModel: !this.state.showModel,
      chosenAnimal: {}
    })
  
  }

  render() {
    return (
      <>
        <Header />
        <Footer />
        <Main renderModel={this.renderModel} chosenAnimal={this.state.chosenAnimal} handleClose={this.handleClose} showModel={this.state.showModel} />
        
        <SelectedBeast showModel={this.state.showModel} chosenAnimal={this.state.chosenAnimal} handleClose={this.handleClose} />

      </>
    )
  }
}

export default App