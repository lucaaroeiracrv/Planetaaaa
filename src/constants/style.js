import { StyleSheet } from "react-native"
import { height, width } from "./dimensions"

export default StyleSheet.create({

    backgroundImage: {
        width: width,
        height: height,
    },
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:"white"
    },
    content: {
        width: width,
        backgroundColor: 'transparent',
        padding: 50,
        margin: 15,
        borderRadius: 28,
        alignItems: 'center',
    },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      text: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#e94668',
        padding:20,
        borderRadius: 5,
        width:width*0.7,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontSize: 20,
      },
    });