import React, { useState } from "react";
import { View, Text } from "react-native";

import ChatHeader from "../components/messages/ChatHeader";
import ChatInput from "../components/messages/ChatInput";
import MessagesList from "../components/messages/MessagesList";

const MessagesScreen = ({ navigation, route }) => {
	const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [emojis, setEmojis] = useState('');

	const swipeToReply = (message) => {
		setReply(message.length > 50 ? message.slice(0, 50) + "..." : message);
	};

	return (
		<View style={{ flex: 1 }}>
			<ChatHeader
				onPress={() => {}}
				username={username}
				picture={picture}
				onlineStatus={'Online'}
			/>
			<MessagesList onSwipeToReply={swipeToReply} />
			<ChatInput reply={reply} />
		</View>
	);
};

export default MessagesScreen;
