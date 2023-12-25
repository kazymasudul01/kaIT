


import GetQuote from '../GetQuote/GetQuote';

import MarqueText from '../../../MarqueText/MarqueText';
import Services from '../Services/Services';
import About from '../About/About';
import Test from '../test/test';


const Home = () => {
    return (
        <div>
           
            <GetQuote></GetQuote>
           <MarqueText></MarqueText>
           <Services></Services>
          <About></About>
           {/* <Test></Test> */}
           

          
        </div>
    );
};

export default Home;