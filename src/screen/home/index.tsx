import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { COLORS } from "../../constants/color";
import { TodoList } from "../../components/todo-list";

export default function Home() {
  return (
    <>
      <StatusBar translucent />
      <SafeAreaView style={styles.container}>
        <Header />
        <TodoList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
});
