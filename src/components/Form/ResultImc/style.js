import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    ResultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numerImc: {
        fontSize: 48,
        color: "#008000",
        fontWeight: "bold",
    },

    information: {
        fontSize: 18,
        color: "#008000",
        fontWeight: "bold",
    },

    boxSharebutton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },

    shared:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
})

export default styles