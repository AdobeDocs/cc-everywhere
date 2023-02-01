import './Button.css';
import './logo1.png';
import Logo from './logo1.svg';
import { Text, Heading, Content} from '@adobe/react-spectrum';
import styles from '@spectrum-css/typography/dist/index-vars.css';

const Button = ({ embedSDK }) => {
  function initSDK(){
    console.log(embedSDK)

  }

  return (
    <>
        <Heading level={3} > Extra large - light, 18pt font, 48px high</Heading>
        <button className="App-button-light"  onClick={initSDK} >
            {/* <img src={require("./logo1.png")} alt="Adobe Express logo" ></img> */}
            <img className="icon" src={Logo} alt="Adobe Express logo" ></img>
            {/* <Text>Create &nbsp; </Text> */}
            <p className={styles.className}>hi</p>
        </button>  
    </>    
  );
};

export default Button;
