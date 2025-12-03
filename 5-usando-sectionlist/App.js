import { Text, View, SectionList, StatusBar } from 'react-native';
import styles from './styles';

const DADOS = [
  {
    titulo: 'Eletrônicos',
    data: ['TV', 'Caixa de Som', 'Toca-discos Retrô']
  },
  {
    titulo: 'PlayStation',
    data: ['Controle', 'PSPlus', 'Exclusivos']
  },
  {
    titulo: 'Livros',
    data: ['Ficção', 'Suspense', 'Policiais']
  }
];

const Item = ({ titulo }) => (
  <View style={styles.item}>
  <Text style={styles.titulo}>{titulo}</Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
  <SectionList
    sections={DADOS}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Item titulo={item} />}
    renderSectionHeader={({ section: { titulo } }) => (
    <Text style={styles.header}> {titulo} </Text>
    )}
  />
  </View>
);

export default App;


