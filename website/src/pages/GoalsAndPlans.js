import React from 'react';

const GoalsAndPlans = () => {
    return <div style={{
        display: 'flex',
        flexDirection: 'column'
    }}>

        <h1 style={{ marginLeft: '0.5em' }}>MoSCoW Methode</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: '1rem'
        }}>
            <p style={{ marginTop: '0.5em', marginBottom: '0.5em' }}>For this part we have thought about our goals:</p>
            <p style={{ marginTop: '0.5em', marginBottom: '0.5em', fontStyle: 'italic' }}>"What do we definitly need in order to finish the project? What would be nice to have?
                What don't we need or cannot accomplish in the given time?"
            </p>
        </div>
        <div className='content' style={{
            display: 'flex',
            flexDirection: 'column',
            borderColor: 'darkgrey',
            borderStyle: 'solid',
            borderWidth: '0.1rem',
            margin: '1rem',
            boxShadow: '5px 5px 5px darkgrey'
        }}>
            <ul style={{ margin: '0.5em', paddingLeft: '25px' }}>
                <h3 style={{ marginTop: '0.5em' }}>Must</h3>
                <li>1 Spiel</li>
                <li>Spiel muss vom Rasp aus gestartet werden</li>
                <li>der Button soll im Spiel als Input dienen</li>
                <hr style={{ marginTop: '1em' }} />
            </ul>
            <ul style={{ margin: '0.5em', paddingLeft: '25px' }}>
                <h3 style={{ marginTop: '0.5em' }}>Should</h3>
                <li>2 Spiele</li>
                <li>automatisches Starten beim Einschalten des Rasp</li>
                <li>Case mithilfe des 3D Druckers herstellen</li>
                <li>Display für die Konsole</li>
                <hr style={{ marginTop: '1em' }} />
            </ul>
            <ul style={{ margin: '0.5em', paddingLeft: '25px' }}>
                <h3 style={{ marginTop: '0.5em' }}>Could</h3>
                <li>automatischer Wechsel bei Spielen</li>
                <li>Zusammenfassung von Spielen zu einem Spiel</li>
                <hr style={{ marginTop: '1em' }} />
            </ul>
            <ul style={{ margin: '0.5em 0.5em 1em 0.5em', paddingLeft: '25px' }}>
                <h3 style={{ marginTop: '0.5em' }}>Won't</h3>
                <li>Steuerkreuz als zusätzliche Steuerungseinheit</li>
                <li>Laptop als Bildschirm nutzen</li>
            </ul>
        </div>
    </div>;
};

export default GoalsAndPlans;
