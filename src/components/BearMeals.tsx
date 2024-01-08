import { Text, KeyboardAvoidingView } from "react-native";
import { useBearMeals } from "../store/useBearMeals";
import { useShallow } from "zustand/react/shallow";
import { styles } from "../styles";

export default function BearMeals() {
  console.log("BearMeals renders");
  const meals = useBearMeals(useShallow((state) => Object.values(state)));

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ ...styles.text24, color: "tomato" }}>BearNames</Text>
      <Text style={styles.text24}>{meals.join(", ")}</Text>
    </KeyboardAvoidingView>
  );
}
