import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    backgroundColor: '#5C5C5C',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: '#949494',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 5,
    marginBottom: 10,
  },
  subTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
  },
  content: {
    color: '#949494',
    fontSize: 14,
    padding: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mr10: {
    marginRight: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#8A8A8A',
    padding: 20,
    borderRadius: 10,
  },
  headerContainer: {
    marginTop: 5,
    backgroundColor: '#5C5C5C',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
