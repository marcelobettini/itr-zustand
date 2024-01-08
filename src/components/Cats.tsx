import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { styles } from "../styles";
import { useState } from "react";
import { useCatStore } from "../store/useCatStore";
export default function Cats() {
  const { cats, decrease, increase, restore } = useCatStore();
  const [num, setNum] = useState<number>(0);
  const up = () => {
    increase(num);
    Keyboard.dismiss();
  };
  const down = () => {
    decrease(num);
    Keyboard.dismiss();
  };

  const reset = () => {
    restore();
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.text24}>Cats: {cats}</Text>
      <TextInput
        style={styles.text24}
        placeholder="modify state by..."
        keyboardType="numeric"
        onChangeText={(text) => setNum(() => Number(text))}
      />
      <View style={styles.btnGroup}>
        <Button title="increase" onPress={up} />
        <Button title="decrease" onPress={down} />
        <Button title="restore" onPress={reset} />
      </View>
    </KeyboardAvoidingView>
  );
}
