import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecipeListCard = ({dish, navigation}) => {
    console.log(navigation);
    const imageURI = dish.item.recipe.image;
    const totalTime = dish.item.recipe.totalTime;
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Recipe',{item:dish});
                }}
            >
                <View style={styles.dishDetailStyle}>
                    <Image 
                        source={{uri:imageURI}}
                        style={styles.imageStyle}
                    />
                    <View style={styles.detailStyle}>
                        <Text style={styles.dishNameStyle}>{dish.item.recipe.label}</Text>
                        {parseInt(totalTime) === 0 ?
                            <Text style={styles.timeStyle}>N/A Minutes</Text>
                            :
                            <Text style={styles.timeStyle}>{totalTime} Minutes</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        marginHorizontal:15,
        marginTop:25,
    },
    dishDetailStyle:{
        flexDirection:'row',
        backgroundColor:'#f8f9fa',
        borderRadius:10,
    },
    imageStyle:{
        width:100,
        height:100,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    detailStyle:{
        marginHorizontal:15,
        
    },
    dishNameStyle:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:10,
        paddingHorizontal:10,
    },
    timeStyle:{
        marginVertical:10,
        marginBottom:10,
        padding:10,
    }
});

export default RecipeListCard;