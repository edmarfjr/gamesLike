import {StyleSheet} from "react-native"
import { green } from "react-native-reanimated/lib/typescript/Colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
       alignItems: "center",
       backgroundColor: 'black',
       padding: 20
      },
      title:{
        fontWeight:'bold',
        fontSize:32,
        color: 'white',
        marginBottom: 10
      },
      input:{
        width: '100%',
        height:50,
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "white",
        marginBottom:20,
        color: 'white'
      },
      button:{
        backgroundColor:"white",
        alignItems:"center",
        borderRadius:10,
        justifyContent:'center',
        width:'100%',
        height:50
      },
      buttonText:{
        fontWeight:'bold',
        color:"black",
        justifyContent:'center'
      },
      card:{
        marginTop:30,
        width:'95%',
        borderRadius: 10,
        padding:20,
        borderWidth: 1,
        backgroundColor: 'black',
        borderColor: "white"
      },
      cardTitle:{
        fontSize:16,
        fontWeight:'bold',
        color: 'white',
        marginBottom:10,
      },
      cardText:{
        fontSize:16,
        color: 'white'
      },
      image: {
        width: 200,
        height: 100,
      },
})

export default styles;