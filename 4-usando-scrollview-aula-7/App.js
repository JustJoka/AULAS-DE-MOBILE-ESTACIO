import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScrollView}>
        <Text style={styles.texto}>
          Este componente também é um container, sendo exemplo da view, utilizado para armazenar conteudo, permitindo interação na tela por meio de rolagem. Logo, ScrollView, para funcionar corretamente precisa ter uma altura limitada, já que sua serventia é justamente conter elementos filhos com altura limitada.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerScrollView: {
    backgroundColor: 'lightgray',
    marginHorizontal: 25,
  },
  texto: {
    fontSize: 26,
  },
});
