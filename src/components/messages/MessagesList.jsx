import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";

import Message from "./Message";

import { theme } from "../../theme";

const MessagesList = ({ onSwipeToReply }) => {
	const [messages, setMessages] = useState([
		{
			user: 0,
			time: "12:00",
			content: "Hey u",
		},
		{
			user: 1,
			time: "12:05",
			content: "sao v bro",
		},
		{
			user: 1,
			time: "12:07",
			content: "nay đi cf k?",
		},
		{
			user: 0,
			time: "12:09",
			content: "ok, giờ luôn k",
		},
		{
			user: 0,
			time: "12:00",
			content: "ok bro",
		},
		{
			user: 1,
			time: "12:05",
			content: "quán cũ, 20p nữa nhá",
		},
		{
			user: 0,
			time: "12:07",
			content: "okok",
		},
		{
			user: 1,
			time: "12:09",
			content: "Great",
		},
		{
			user: 0,
			time: "12:07",
			content: "7 o'clock?",
		},
		{
			user: 1,
			time: "12:09",
			content: "Sounds good",
		},
	]);

	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
					key={index}
					time={message.time}
					isLeft={message.user !== user.current}
					message={message.content}
					onSwipe={onSwipeToReply}
				/>
			))}
		</ScrollView>
	);
};

export default MessagesList;
