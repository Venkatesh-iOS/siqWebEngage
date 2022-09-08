 import React, { useState } from "react";
 import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   Button,
   TouchableOpacity,
 } from "react-native";//No I18N
import {ZohoSalesIQ} from 'react-native-zohosalesiq-mobilisten';
import WebEngage from 'react-native-webengage';
var webengage = new WebEngage();
 export default class App extends React.Component {
   init(){
      
      ZohoSalesIQ.initWithCallback("CrBJ9braUTjGBBvZMKTzlZh4hNdNRutwlgJ6csVh4SVnHY1FbjbUPQnoI0eauU4W", "6SrcT7p988M9aFDiQnbJ8RdZA03n1tDxISDNdrWJRDscGl0HZtY3DBEgr%2FzbZ9iKWXE%2FVBXJU7CHjGm1wlxRiHeYvjDKy0R%2F0Kdz5E0SPf6nFKlAIQEabZoUQ7qVWB%2BjjJ35%2FnDi1wdNhGDYWs3ovIAcHL87NxjG", success => {
        console.log('====================================');
        console.log("Inside initwithcallback");
        if (success) 
        {
          console.log('SETTING LAUNCHER VISIBILITY TO TRUE');

          ZohoSalesIQ.setLauncherVisibility(true);

        }
        else
        {
          console.log('====================================');
          console.log('ERROR WHILE initwithcallback');
          console.log('====================================');
        }
      });
   }
   
   componentDidMount(){
     this.init();
   }

   openSdk(){
     ZohoSalesIQ.openChat();
   }
   

   render() {
     return (
       <View style={styles.container}>
       <TouchableOpacity style={styles.inputView} onPress={this.openSdk}>
         <Text style={styles.ButtonText}>OPEN SALESIQ SDK</Text>
       </TouchableOpacity>
        </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
    //  backgroundColor: "#575757",//No I18N
    backgroundColor: "#fff",//No I18N
     // alignItems: "center",
     // justifyContent: "center",
     marginBottom: 20,
     marginTop: 20,
   },
   inputView: {
     backgroundColor: "#4169E1",//No I18N
     borderRadius: 5,
     width: "90%",//No I18N
     height: 45,
     marginLeft: "5%",
     marginBottom: 20,
     alignItems: "center",//No I18N
   },
   ButtonText: {
     height: 50,
     flex: 1,
     padding: 10,
     marginLeft: 20,
     color:"#fff",//No I18N
   },

   TextInput: {
     backgroundColor: "#fff",
     marginLeft: "5%",
     width: "90%",
     height: 40,
     marginBottom: 20,
     borderWidth: 1,
     borderColor: "#4169E1",
     borderRadius: 3,
     padding: 10,
     textAlign:'center'
   },
 });
