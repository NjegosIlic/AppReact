import React from 'react';
import { Container } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
  return (
    <Container>
      <FontAwesomeIcon icon={ faHome } /> Home koji treba da se pojavi
    </Container>
  );
}

export default HomePage;
