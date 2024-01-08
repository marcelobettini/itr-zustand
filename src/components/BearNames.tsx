import { Text, Button, KeyboardAvoidingView } from "react-native";
import { useBearMeals } from "../store/useBearMeals";
import { useShallow } from "zustand/react/shallow";
import { styles } from "../styles";

import React from "react";

export default function BearNames() {
  console.log("BearNames renders");
  const names = useBearMeals(useShallow((state) => Object.keys(state)));
  const handlePizza = () => {
    useBearMeals.setState({
      babyBear: "Pizza de cuatro quesos",
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...styles.text24, color: "tomato" }}>BearNames</Text>
      <Text style={styles.text24}>{names.join(", ")}</Text>
      <Button title="baby wants pizza" onPress={handlePizza} />
    </KeyboardAvoidingView>
  );
}
