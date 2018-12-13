import React, { Component } from 'react';
import FirebaseApi from '../../api/FirebaseApi';
import './Status.css';

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
        className={"Page "+(!!ocupado ? ocupado === 'carregando' ? 'carregando' : 'ocupado' : 'livre')}
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
