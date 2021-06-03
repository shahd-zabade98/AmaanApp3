import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    //justifyContent: "space-between",
    backgroundColor: "#fff",
    //padding: 20,
    //margin: 10
    },
    title: {
          fontSize: 24,
          fontWeight: 'bold'
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
      /*  height: 38,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'grey',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10,
        paddingLeft: 180*/
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color:'#05375a'

    },
    button: {
        backgroundColor: '#1e90ff',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 100,
        //height: 48,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        padding: 15
    },
    
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    text:{
        fontWeight: 'bold'
    },
    userInfoSection: {
        paddingHorizontal : 30,
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
     action:{
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 30, 
        //marginBottom: 50,
        //borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 50,
        //margin: 3

    },action1:{
        flexDirection: 'column-reverse',
        flex:0.5,
        marginTop: 100, 
        marginBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        marginLeft: 50

    }
})