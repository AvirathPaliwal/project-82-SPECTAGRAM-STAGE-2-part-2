import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image, FlatList
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Ionicons from "react-native-vector-icons/Ionicons";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


export default class Pick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }

    componentDidMount() {
        this._loadFontsAsync();

    }

    async _loadFontsAsync() {
        this.setState({ fontsLoaded: true })
    }

    keyExtractor = (item, index) => index.toString();


    renderItem = ({ item: myPick }) => {
        return <Pick story={myPick} />;
    }



    render() {
        if (!this.state.fontsLoaded) {
            // !true = fale
            return <AppLoading />;
        }
        else {

            return (
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <Image
                            source={require("../assets/image_1.jpg")}
                            style={styles.PickImage} />
                        <View style={styles.titleContainer}>
                            <Text style={styles.PickTitleText}>
                                {this.props.story.title}</Text>
                            <Text style={styles.AuthorText}>{this.props.story.author}</Text>
                            <Text style={styles.captionText}>{this.props.story.caption}</Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.likeButton}>
                                <Text style={styles.likeText}>120K</Text>
                                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />


                            </View>

                        </View>


                    </View>
                </View>
            );
        }
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "white",
        borderRadius: RFValue(20)
    },
    PickImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    PickTitleText: {
        fontSize: RFValue(25),
        color: "white"
    },
    AuthorText: {
        fontSize: RFValue(18),
        color: "black"
    },
    captionText: {
        fontSize: 13,
        color: "black",
        paddingTop: RFValue(15)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});

