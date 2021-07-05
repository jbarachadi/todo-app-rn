import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("todos", jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("todos");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};
