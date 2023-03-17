import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getKey(key) {
    return `${this.namespace}:${key}`;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(this.getKey('token'));
      return token ? JSON.parse(token) : '';
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    // const currentToken = await this.getAccessToken();
    // const newToken = [...currentToken, accessToken];

    await AsyncStorage.setItem(this.getKey('token'),
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(this.getKey('token'));
  }
}

export default AuthStorage;