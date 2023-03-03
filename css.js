import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topView: {
    flex: 0.2,
    backgroundColor: "red",
  },
  bottomView: {
    flex: 0.2,
    backgroundColor: "green",
  },
  centerView: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  productMain: {
    width: 170,
    height: 250,
    marginHorizontal: 7,
    marginVertical: 35,
    borderColor: "gray",
    borderWidth: 1,
  },
  ratingView: {
    flex: 0.1,
    justifyContent: "center",
  },
  imageView: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    flex: 0.2,
    alignItems: "center",
  },
});

export { styles };
