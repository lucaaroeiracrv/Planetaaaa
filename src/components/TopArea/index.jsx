import { ImageBackground } from 'react-native'; 
import PlanetBackground from "../../assets/planets-background.png.jpg"; 
import styles from "../../constants/style";

export default function TopArea() {
  return (
    <ImageBackground style={styles.backgroundImage} source={PlanetBackground}></ImageBackground>
  )
}