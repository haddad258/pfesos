import AsyncStorage from '@react-native-async-storage/async-storage';

const GetConfigSession = async () => {
    try {
        let result = await  AsyncStorage.getItem("userData")
        console.log(result)
        return result
    } catch (error) {
        return null;
    }
};
// eslint-disable-next-line
export default {
    GetConfigSession
};