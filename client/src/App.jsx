import React from 'react';
import './App.css';
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelListContainer, ChannelContainer, Auth} from './components';

const cookies = new Cookies();

const apiKey = '2st32uzuukmy';

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

const App = () => {
    if(authToken) {
        client.connectUser({
            id: cookies.get('userId'),
            name: cookies.get('username'),
            fullName: cookies.get('fullName'),
            image: cookies.get('avatarURL'),
            hashedPassword: cookies.get('hashedPassword'),
            phoneNumber: cookies.get('phoneNumber'),
        }, authToken)
    }

    return (
        <div class="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    )
}

export default App
