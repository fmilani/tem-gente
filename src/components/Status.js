import React, { Component } from 'react';
import FirebaseApi from '../api/FirebaseApi';

class Status extends Component {
  state = {
    ocupado: 'carregando',
  };

  componentDidMount() {
    FirebaseApi.getStatus('banheiros/geral-23', ocupado => {
      this.setState({ ocupado });
    });
  }

  render() {
    const { ocupado } = this.state;
    const { canChange } = !!this.props;
    return (
      <div
        className="Page"
        style={{ backgroundColor: !!ocupado ?  ocupado === 'carregando' ?  'gray' : 'red' : 'green' }}
        onClick={() => {
          if (!canChange) return;
          FirebaseApi.setStatus('banheiros/geral-23', !ocupado);
        }}
      >
        <p>{!!ocupado ? ocupado === 'carregando' ? 'Carregando, por favor aguarde' : 'Tem gente' : 'Está Livre'}</p>
      </div>
    );
  }
}

export default Status;
