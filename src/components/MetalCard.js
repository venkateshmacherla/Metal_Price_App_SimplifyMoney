import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";

export default function MetalCard({
    name,
    data,
    loading,
    error,
    onRetry,
    onPress
}) {
    return (
        <View style={styles.wrapper}>
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => {
            if (error) {
                onRetry(); // retry only when error
            } else {
                onPress && onPress(); // navigate only when no error
            }
            }}
        >
            <Text style={styles.title}>{name}</Text>

            {loading ? (
            <ActivityIndicator size="small" color="#000" />
            ) : error ? (
            <>
                <Text style={styles.error}>Something went wrong</Text>
                <Text style={styles.retry}>Tap to retry</Text>
            </>
            ) : data ? (
            <>
                <Text style={styles.price}>Price: ₹{data.price}</Text>
                <Text style={styles.time}>Updated: {data.time}</Text>
            </>
            ) : null}
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "40%",
        padding: 8,
        justifyContent: "center",
    },

    card: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        elevation: 4,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },

    title: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8,
        color: "#111827",
    },

    price: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 4,
        color: "#16a34a",
    },

    time: {
        fontSize: 12,
        color: "#6b7280",
    },

    error: {
        color: "#dc2626",
        fontSize: 13,
        fontWeight: "500",
    },

    retry: {
        color: "#2563eb",
        marginTop: 6,
        fontSize: 13,
        fontWeight: "500",
    },
});