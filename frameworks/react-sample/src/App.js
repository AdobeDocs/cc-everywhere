import './App.css';
import { lightTheme, Provider, Heading, View} from '@adobe/react-spectrum';
// import './logo1.png';
// import Logo from './logo1.svg';
import Button from './Button';


const App = ({ embedSDK }) => {
  // function initSDK(){
    // console.log(embedSDK)
  // }

  return (
    <Provider theme={lightTheme}>
      <Heading margin="size-500" level={1}>React sample</Heading>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="medium"
        margin="size-500"
        padding="size-250">
          <Heading level={2}>Button sample</Heading>
              
              
            <Button></Button>
      </View>
    </Provider>      
  );
};

export default App;
