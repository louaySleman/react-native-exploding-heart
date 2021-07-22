import React, {useState} from 'react';
import ExplodingHeart from 'react-native-exploding-heart';
import {View} from 'react-native';

const App:() => {
    const [isFavorite, setFavorite] = useState(false);
    return (
        <View>
            <ExplodingHeart width={60} status={isFavorite} onChange={(ev) => console.log(ev)}/>
        </View>
    );
}

export default App;