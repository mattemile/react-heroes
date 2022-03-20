import React from 'react';

const Hero = ({ hero, toggleImportance, deleteHero }) => {
    const label = hero.important ? 'Remove Important' : 'Add Important'
    return (
        <li className='collection-item' style={{ borderBottom: '1px solid #dadada' }}>
            <span className='title'>{hero.name}</span>
            <span className="secondary-content">
                <button className='waves-effect waves-light btn-small ' onClick={toggleImportance}>{hero.important ? 'not important' : <i className="material-icons">grade</i>}</button>
                <button style={{ marginLeft: '5px' }} className='btn-floating btn-small waves-effect waves-light red' onClick={deleteHero}> <i className="material-icons">delete</i></button>
            </span>
        </li>);
}

export default Hero;