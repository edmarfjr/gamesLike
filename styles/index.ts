import {StyleSheet} from "react-native"
import { green } from "react-native-reanimated/lib/typescript/Colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
       alignItems: "center",
       backgroundColor: '#f5f5f5',
       padding: 20
      },
      title:{
        fontWeight:'bold',
        fontSize:32,
        color: 'green',
        marginBottom: 10
      },
      input:{
        width: '100%',
        height:50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        marginBottom:20
      },
      button:{
        backgroundColor:"#4ecdc4",
        alignItems:"center",
        borderRadius:10,
        justifyContent:'center',
        width:'100%'
      },
      buttonText:{
        fontWeight:'bold',
        color:"#fff"
      },
      card:{
        marginTop:30,
        width:'95%',
        borderRadius: 10,
        padding:20,
        borderWidth: 1,
        backgroundColor: '#FFF',
        borderColor: "#ddd"
      },
      cardTitle:{
        fontSize:16,
        fontWeight:'bold',
        color: '#333',
        marginBottom:10,
      },
      cardText:{
        fontSize:16,
        color: '#666'
      }
})

export default styles;