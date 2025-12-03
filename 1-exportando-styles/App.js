import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; //importando o arquivo de estilos

export default function App() {
  return (
    <View style={styles.frontEnd}>

      <Text style={styles.title}>
        Hello world
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Click Here
        </Text>
      </TouchableOpacity>

    </View>
  );
}

