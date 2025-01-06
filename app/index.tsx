import { geradorLista } from "@/services/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView} from "react-native";

interface jogo {
  nome:string;
  plataformas: string;
  descricao: string;
  imagem: string;
}

export default function Index() {
  
  const [listaJogos, setlistaJogos] = useState("")
  const [resposta, setResposta] = useState<jogo[]>([])
  const [isLoading, setIsloading] = useState (false)

  const gerarListaJogos = async () => {
    if (listaJogos.length < 2){
      alert("Digite ao menos um jogo")
      return;
    }

    setIsloading(true);
    
    try{
      const result = await geradorLista(listaJogos);
 
      setResposta(JSON.parse(result))
      
    } catch (error) {
      alert(error)
    }finally{
      setIsloading(false);
    }

    
  }
  
  return (
    
      <View
        style={styles.container}
      >
      <Text  style={styles.title}>Jogos Parecidos</Text>
      <TextInput
        onChangeText={setlistaJogos}
        value={listaJogos}
        style={styles.input}
        placeholder = "Digite seus jogos favoritos">
        
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={gerarListaJogos}>
        <text style={styles.buttonText}>
          { isLoading ? "Carregando..." : "Procurar Jogos"}
        </text>
      </TouchableOpacity>

      <ScrollView>
       
        <FlatList
          data = {resposta}
          keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View  style={styles.card}>
            
            <Text style={styles.cardTitle}>{item.nome} ({item.plataformas})</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
            <Image source={{ uri: item.imagem }} style={styles.image} />
          </View>
        )}
      />
      </ScrollView>

    </View>
    
    
  );
}
