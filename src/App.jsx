import './App.css'

const App = () => {
    /* -------------------------------------------- */
    // Aplicar estilos desde el códgigo JSX.
    const isBlue = true;
    const myStyle = {
        color: isBlue ? 'blue' : 'red',
        backgroundColor: 'red',
        fontSize: '2rem'
    }

    return(
        // <div className='my-class'> Hola mundo!</div>
        // <div style={{backgroundColor: 'red', fontSize: '2rem'}}>Hola mundo2!</div>
        <div style={myStyle}>
            Hola mundo3!
        </div>
    )
    /* -------------------------------------------- */
};

export default App; 