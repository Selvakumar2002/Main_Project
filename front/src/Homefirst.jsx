// import './App.css';
import Firstpage from './Component/Firstpage/Firstpage';
import Container from 'react-bootstrap/Container';
import Secondpage from './Component/Secondpage/Secondpage';
import Thirdpage from './Component/Thirdpage/Thirdpage';
import Fourthpage from './Component/Fourthpage/Fourthpage';
import Sevenpage from './Component/Sevenpage/Sevenpage';
import Sixpage from './Component/Sixpage/Sixpage';
import Fivepage from './Component/Fivepage/Fivepage';
import Eigthpage from './Component/Eightpage/Eightpage';
import Homepage from "./Component/Homepage/Homepage";

function Homefirst() {
  return (
    <Container fluid>
    <div className="App">
        <Homepage />

          < Firstpage />
          <Secondpage />
          <Thirdpage />
          <Fourthpage />
          <Fivepage />
          <Sixpage />
          <Sevenpage />
          <Eigthpage />
    
    </div>
    </Container>
  );
}

export default Homefirst;
