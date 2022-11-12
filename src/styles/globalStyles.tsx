import { StyleSheet } from "react-native";

const Globalstyles = StyleSheet.create({
  global: {
    display: "flex",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F0F0F0",

    padding: 10,
  },
  title: {
    fontSize: 25,
    color: "#58A80F",
    marginVertical: 10,
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#9C27B0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default Globalstyles;
