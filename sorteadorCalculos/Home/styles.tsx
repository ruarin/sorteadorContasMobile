import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      
    container : {
        flex:1,
        backgroundColor:'#383535',
    },

    form : {
    flexDirection : 'row',     
        justifyContent: 'space-around',
        textAlign: 'center', 
        alignItems: 'center',
    },

    formButton : {
        height: 100,
        flexDirection : 'row',     
        justifyContent: 'center',
        textAlign: 'center', 
        alignItems: 'center',
        gap: 150,
   },

    formQuadrado : {
        height: 130,
        flexDirection : 'row',   
        justifyContent: 'center',
        textAlign: 'center', 
        alignItems: 'center', 
        gap: 30
    },

    contagem : {
        fontSize: 28,
        color: '#ffff',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 25,
    },

    certas : {
        fontSize: 16,
        color: '#4AA5F9',
        fontWeight: 'bold',
       
    },

    textCertas : {
        fontSize: 16,
        color: '#ffff',      
        fontWeight: 'bold',

    },

    erradas : {
        fontSize: 16,
        color: '#D34C6C',      
        fontWeight: 'bold',
        marginLeft: 220
    },

    textErradas : {
        fontSize: 16,
        color: '#ffff',      
        fontWeight: 'bold',

    },

    buttonSortear : {
        height: 50,
        width: 285,
        backgroundColor: '#5D5FEF',
        borderRadius: 15,
        justifyContent: 'center',
        
    },
    
    textButton : {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    line : {
        borderBottomWidth: 1,
        borderColor: '#fff',
        height: 1,
        width: 375,
        marginLeft: 10
    },

    textQuant : {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 30
    },

    quadrado : {
        width: 90,
        height: 70,
        backgroundColor: '#4AA5F9',
        borderRadius: 20,
        textAlign: 'center',
        padding: 12,
    },

    textQuadrado : {
        fontSize: 32,
        color: '#ffff',
        fontWeight: 'bold',        
    },

    textInfo : {
        fontSize: 19,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 30
    },

    quadradoInfo : {
        width: 180,
        height: 70,
        backgroundColor: '#ffff',
        borderRadius: 20,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 30,
        fontSize: 30,
        color: '#8C4FCA',
        fontWeight: 'bold',
    },

    quadradoValidar : {
        width: 320,
        height: 65,
        backgroundColor: '#04D361',
        borderRadius: 15,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 70
    },

    textValidar: {
        fontSize: 26,
        color: '#ffff',
        fontWeight: 'bold',        
    },

    quadradoNovo : {
        width: 250,
        height: 50,
        backgroundColor: '#D34C6C',
        borderRadius: 15,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 50
    },

    textNovo: {
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold',        
    },


})
