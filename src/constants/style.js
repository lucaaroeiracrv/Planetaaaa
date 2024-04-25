// Arquivo 1: styles.js

import { StyleSheet } from "react-native"
import { height, width } from "./dimensions"

export default StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: -1, 
  },
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  content: {
    width: width - 20, 
    padding: 50,
    borderRadius: 28,
    alignItems: 'center',
    backgroundColor: "white"
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
    padding: 20,
    borderRadius: 32,
    width: width * 0.7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
