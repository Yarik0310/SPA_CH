import povar from './povar1.jpg';

function Contact () {
    return(
        <div>
            <h1>Contact us! We need more people for our project!</h1>
            <img src={povar} alt=""/>
            <h5> If you have any expeiance of this work we want to invite you!  </h5>
            <h5>phone: 1(234)567-89-01</h5>
            <h5>email: eater@food.com</h5>
            
        </div>
      );
}

export { Contact }