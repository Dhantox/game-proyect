import React from 'react';
import Player from '../player';
import Mapa from '../map';

function World(props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '800px',
        height: '425px',
        margin: '20px auto'
      }}
    >
      <Mapa />
      <Player />
    </div>
  );
}
export default World;
