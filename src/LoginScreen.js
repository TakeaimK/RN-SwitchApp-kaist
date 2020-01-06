import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FooterButton from './components/FooterButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idtext: '이메일',
      pwtext: '비밀번호',
      id: '',
      pw: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./icon.png')} style={styles.icon} />
        <Text style={styles.welcomeText}>환영합니다!</Text>
        <TextInput
          style={styles.textInputButton}
          onChangeText={id => this.setState({id})}
          placeholder={this.state.idtext}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInputButton}
          onChangeText={pw => this.setState({pw})}
          placeholder={this.state.pwtext}
          autoCorrect={false}
          secureTextEntry={true}
        />
        <FooterButton
          buttonText="로그인"
          style={styles.logInButton}
          onPress={() => {}}
        />
        <Text style={styles.noAccount}>계정이 없으신가요?</Text>
        <TouchableOpacity>
          <Text style={styles.makeAccount}>계정 만들기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 70,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 23,
  },
  textInputButton: {
    width: 288,
    borderColor: 'gray',
    paddingVertical: 10,
    borderWidth: 0.3,
    paddingHorizontal: 5,
    borderRadius: 2,
    backgroundColor: 'white',
    height: 50,
  },
  logInButton: {
    width: 315,
    height: 50,
    marginTop: 50,
  },
  noAccount: {
    marginTop: 30,
    fontSize: 12,
    color: '#5B5A5A',
  },
  makeAccount: {
    fontSize: 12,
    color: '#9013FE',
  },
});
