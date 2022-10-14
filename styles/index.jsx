import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f9c2ff',
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    alignSelf: "center",
    fontSize: 28,
  },
});