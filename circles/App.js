// Render the circles using React!
const App = props => {
  let { circles } = props;

  return (
    <React.Fragment>
      {circles.map((e, index) => (<div key={index} style={{borderRadius: '50%',height: e.radius, width:e.radius,  backgroundColor:e.color}}>
        </div>
      ))}
    </React.Fragment>
  );
};

const Circle = null; // CHALLENGE: Write a separate Circle component for use in the App component
