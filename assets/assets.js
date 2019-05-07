import { Asset } from 'expo';

import icon from './icon.png';
import keyboard from './keyboard.png';
import splash from './splash.png';
import user from './user.png';

export default () => {
    Asset.loadAsync([icon, keyboard, splash, user])
}