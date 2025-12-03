import { Text, View, StyleSheet } from 'react-native';
import saudacao, {toUpper, toLower} from './help';

export default function App() {
  return (
    <View>
      <Text>{saudacao('Joka')} </Text>
      <Text>{toUpper('pao de batata')}</Text>
      <Text>{toLower('REACT NATIVE')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
