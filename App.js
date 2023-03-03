import {
  StyleSheet,
  Text,
  View,
  useState,
  FlatList,
  Image,
} from "react-native";
import { styles } from "./css";

export default function App() {
  var data = [
    {
      key: 0,
      title: "Zinger Burger",
      price: "$20",
      rating: "4.6",
      image:
        "https://img.freepik.com/premium-photo/cheeseburger-isolated-white-background_742252-2213.jpg?w=740",
    },
    {
      key: 1,
      title: "Grill Burger",
      price: "$30",
      rating: "4.6",
      image:
        "https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png",
    },
    {
      key: 2,
      title: "Product Name",
      price: "$200",
      rating: "4.6",
      image:
        "https://www.freepnglogos.com/uploads/burger-png/burger-png-food-menu-sullivan-ice-cream-1.png",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text>Top</Text>
      </View>
      <View style={styles.centerView}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <View style={styles.productMain}>
              <View style={styles.ratingView}>
                <Text>{item.rating}</Text>
              </View>
              <View style={styles.imageView}>
                <Image
                  style={{
                    width: 130,
                    height: 130,
                  }}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={styles.detailsView}>
                <View>
                  <Text style={{ fontWeight: 600 }}>{item.title}</Text>
                </View>
                <View>
                  <Text style={{ color: "gray" }}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.bottomView}>
        <Text>Bottom view</Text>
      </View>
    </View>
  );
}
