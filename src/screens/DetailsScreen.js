import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
    const { metal, details } = route.params;
    
    return (
        <View style={styles.container}>
        {/* Header */}
        <Text style={styles.title}>{metal}</Text>
        <Text style={styles.subtitle}>Live Market Details</Text>

        {/* Price Card */}
        <View style={styles.card}>
            <Text style={styles.label}>Current Price</Text>
            <Text style={styles.price}>₹{details?.price}</Text>
            <Text style={styles.time}>Updated: {details?.time}</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.row}>
            <View style={styles.smallCard}>
            <Text style={styles.label}>Previous Open Price</Text>
            <Text style={styles.openValue}>
                ₹{(details?.price * 0.95).toFixed(2)}
            </Text>
            </View>

            <View style={styles.smallCard}>
            <Text style={styles.label}>Previous Close Price</Text>
            <Text style={styles.closeValue}>
                ₹{(details?.price * 0.97).toFixed(2)}
            </Text>
            </View>
        </View>

        {/* Date Card */}
        <View style={styles.card}>
            <Text style={styles.label}>Current Date</Text>
            <Text style={styles.value}>{new Date().toDateString()}</Text>

            <Text style={[styles.label, { marginTop: 10 }]}>Current Time</Text>
            <Text style={styles.value}>
            {new Date().toLocaleTimeString()}
            </Text>
        </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f9fb",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    subtitle: {
        color: "#666",
        marginBottom: 15,
    },

    card: {
        backgroundColor: "#ffffff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#eee",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    smallCard: {
        backgroundColor: "#ffffff",
        padding: 14,
        borderRadius: 10,
        width: "48%",
        elevation: 2,
        borderWidth: 1,
        borderColor: "#eee",
    },

    label: {
        fontSize: 12,
        color: "#888",
    },

    price: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 5,
        color: "#16a34a",
    },
    openValue: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 2,
        color: "#2563eb",
    },
    closeValue: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 2,
        color: "#dc2626",
    },
    value: {
        fontSize: 16,
        fontWeight: "600",
        marginTop: 2,
    },

    time: {
        fontSize: 12,
        color: "#666",
    },
});