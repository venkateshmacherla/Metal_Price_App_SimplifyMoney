import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import MetalCard from "../components/MetalCard";
import { fetchMetalPrice } from "../services/api";

const metals = ["Gold", "Silver", "Platinum", "Palladium"];

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState({});
    const [error, setError] = useState({});

    const loadMetal = async (metal) => {
        setLoading((prev) => ({ ...prev, [metal]: true }));

        try {
            const result = await fetchMetalPrice(metal);
            setData((prev) => ({ ...prev, [metal]: result }));
            setError((prev) => ({ ...prev, [metal]: null }));
        } catch {
            setError((prev) => ({ ...prev, [metal]: true }));
        } finally {
            setLoading((prev) => ({ ...prev, [metal]: false }));
        }
    };

  useEffect(() => {
    metals.forEach(loadMetal);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Metal Prices</Text>
        <Text style={styles.subheading}>Live market rates</Text>
      </View>
      <FlatList
        data={metals}
        keyExtractor={(item) => item}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: "center" }}
        renderItem={({ item }) => (
          <MetalCard
            name={item}
            data={data[item]}
            loading={loading[item]}
            error={error[item]}
            onRetry={() => loadMetal(item)}
            onPress={() =>
              navigation.navigate("Details", {
                metal: item,
                details: data[item],
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fb",
    paddingTop: 10,
  },

  header: {
    paddingHorizontal: 16,
    marginBottom: 10,
    alignItems: "center",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },

  subheading: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },

  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});