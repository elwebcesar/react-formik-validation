import React from 'react'

import './App.css';
import Menu from './components/Menu/Menu'
import FormContact from './components/Form/FormContact'
import Modal from './components/Modal/Modal'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateValue: false,
      value: '',
      items: [
        {
          id: 1,
          name: "Vivair"
        },
        {
          id: 2,
          name: "Avianca"
        }
      ],
    };
  }

  _changeName = (name) => {
    this.setState({
      stateValue: true,
      value: name,
    })
  }

  _modalOpen(timeOut) {
    document.getElementById('modal').classList.add('show');

    setTimeout(() => {
      document.getElementById('modal').classList.remove('show');
    }, timeOut);
  }


  render(){

    const {
      value,
      items,
      stateValue
     } = this.state;

    return (
      <main className='main'>
        <header className='all menu'>
          <nav>
            <Menu
              menuItems={items}
              changeName={this._changeName}
            />
          </nav>
        </header>
        <section>
          <article className='all cuerpo'>
            {stateValue ? (
              <h1>Hola, bienvenido, sabemos que quieres viajar en un {value}</h1>          
            ) : (
              <h1>Selecciona la aerolínea.</h1>
            )}
          </article>
          <article>
            <div className='wrap'>
              <FormContact
                modalOpen={this._modalOpen}
              />
            </div>
            <Modal />
          </article>
        </section>
      </main>
    )
  }
}

export default App;