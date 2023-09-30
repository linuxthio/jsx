import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from "./Name.js"
import Price from './Price.js'
import Description from './Description'
import Image from './Image'


function App(props) {
  console.log(props.username)
  // props.username="kolal"
  return (
    <div className="App">
      <h1>My Shop.sen</h1>
      <Card style={{ width: '28rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
          <Button variant="primary" size="lg">BUY</Button>
        </Card.Body>
      </Card>
      <Card className='about'>
      <Card.Img  className='moi' src='https://gomycodelearndev.blob.core.windows.net/profiles/85cd61c5-0218-4033-907a-c0fd79889064-133384925302494483.jpg' alt='moi' />
      <h2>Hello {props.username}</h2>
      </Card>

    </div>
  );
}

export default App;

