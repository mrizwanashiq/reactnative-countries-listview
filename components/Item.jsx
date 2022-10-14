import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

const Item = ({ title, image }) => (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 10 }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default Item;