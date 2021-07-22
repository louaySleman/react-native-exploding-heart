# react-native-exploding-heart

<p align="left">
  <a href="https://www.npmjs.com/package/react-native-mapbox-boundaries"><img src="https://img.shields.io/badge/npm-v1.0-blue"></a>
  <a href="https://travis-ci.org/react-native-mapbox-boundaries/react-native-mapbox-boundaries"><img src="https://img.shields.io/travis/react-native-elements/react-native-elements/master.svg"></a>
  <a href="https://github.com/react-native-elements/react-native-elements"><img src="https://img.shields.io/badge/stars-5-blue"></a>
</p>

<p align="left">
  <a><img src="https://img.shields.io/badge/sponsors-2-green"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>

</p>

## Get Started
<img src="https://raw.githubusercontent.com/louaySleman/react-native-exploding-heart/master/assets/1.gif" style="width: 30%" />

### Installation

```js
npm i lottie-react-native react-native-exploding-heart
```

or by using yarn

```js
yarn add lottie-react-native react-native-exploding-heart
```
-----
### Usage

```js
import React, {useState} from 'react';
import ExplodingHeart from 'react-native-exploding-heart';
import {View} from 'react-native';

const Home = () => {
    const [isFavorite, setFavorite] = useState(false);
    return (
        <View>
            <ExplodingHeart width={60} status={isFavorite} onChange={(ev) => console.log(ev)}/>
        </View>
    );
}

export default Home;
```
-----
### Report

If there is something you's like to see or request a new feature, please submit an
[issue](https://github.com/louaySleman/react-native-exploding-heart/issues/new)
or a
[pull request](https://github.com/louaySleman/react-native-exploding-heart/pulls).

-----
### Core Contributors

We are currently looking for new core contributors that can help lead this project.

[Learn more here](mailto:louayakram12@hotmail.com)

### react-native-exploding-heart
