import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import { StatusBar } from 'expo-status-bar'

function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBg}></View>
            <View style={styles.banner}>
                <Image 
                  style={{width: 80, height: 80, borderRadius: 7}}
                  source={require('./../assets/Logo-1.png')} 
                />
                <View style={{paddingTop: 10, paddingLeft: 25}}>
                  <Text style={textBannerstyle}>CÔNG TY TNHH {"\n"}BILLDOAN CONSULTATION</Text>
                  <Text style={EmailBannerstyle}>Email: billdoan.consult@gmail.com</Text>
                </View>
            </View>

            <View style={styles.footer}>
              <View style={{...padding(15,4,6,4)}}>
                <Text style={textFooterstyle}>" Chi nhánh 1</Text>
                <Text style={textFooterstyle}>Điện thoại: 0976.205.488</Text>
                <Text style={textFooterstyle}>Địa chỉ: Số 13, Đường lô V. Cư xá Phú Lâm D, Phường 10, Quận 6, Tp. Hồ Chí Minh.</Text>
                <Text style={textFooterstyle}>" Chi nhánh 2</Text>
                <Text style={textFooterstyle}>Điện thoại: 0829.993.609</Text> 
                <Text style={textFooterstyle}>Địa chỉ: 59 Nguyễn Hữu Thọ, P. Mỹ Phước, Tp. Long Xuyên, An Giang</Text>
              </View>
            </View>
            <StatusBar backgroundColor="white" style="light-content" />
        </SafeAreaView>
    )
}

const textBannerstyle = { 
  color: 'white',
  fontSize: 16,
  // fontWeight: 'bold',
  fontFamily: 'ZillaSlab-Bold',
  textAlign: 'justify'
}

const EmailBannerstyle = {
  color: 'white',
  fontSize: 12,
  fontFamily: 'ZillaSlab-Light',
  textAlign: 'justify'
}

const textFooterstyle = { 
    color: 'white',
    fontSize: 9,
    // fontWeight: 'bold',
    fontFamily: 'ZillaSlab-Bold',
    textAlign: 'justify'
  }
  
const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%'
    },
    headerBg: {
      height: 40,
      width: '100%',
      backgroundColor: '#00059C',
    },
    banner: {
      flexDirection: "row",
      height: 92, 
      width: "100%",
      backgroundColor: '#00059C',
      display: "flex",
      padding: 5
    },
    content: {
  
    }, 
    footer: {
      position: 'absolute',
      bottom: 0,
      height: 130,
      width: '100%',
      backgroundColor: "#00059C",
    }
  });
  
  