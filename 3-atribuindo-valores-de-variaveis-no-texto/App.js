import { Text, View, Card, Image } from 'react-native';
import styles from './styles';

const nome = 'Joka';
const idade = 19;
const cargo = 'Desenvolvedor'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Nome: {nome}</Text>
      <Text style={styles.idade}>Idade: {idade}</Text>
      <Text style={styles.cargo}>Cargo: {cargo}</Text>
    </View>

  );
}
