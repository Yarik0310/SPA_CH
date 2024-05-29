import povar2 from './povariha.jpg';

function About () {
    return(
        <div>
            <h1>Do you love to eat? We too!</h1>
            <img src={povar2} alt=""/>
            <h5> Welcome to our food website! Here you will find a lots of difrent food recipec that we can cook together.</h5>
            
        </div>
      );
}

export { About }