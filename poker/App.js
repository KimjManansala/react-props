

const Card = ({card, index})=>{
    // let { card, index } = props;
    return (

          <React.Fragment key={index}>
            <img style={{ width: 80 }} src={`cards/${card.value}${card.suit}.png`} />
          </React.Fragment>

    );
}





// Render the cards using React!
const App = props => {
//   return (<Card cards={props}/>)
let { cards } = props;
return (
    <React.Fragment>
        {cards.map((e, index)=> (
            <Card card={e} index={index}/>
        )
        )}
    </React.Fragment>
)
};


// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
