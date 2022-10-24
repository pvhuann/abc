import React from 'react'
import { ScrollView } from 'react-native'

import ConversationItem from './ConversationItem';

const Conversations = ({ children }) => {
	return (
		<ScrollView>
			{children}
			<ConversationItem
				picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
				username="Phat Nguyen"
				bio="my name is Phat Nguyen"
				lastMessage="Bye"
				time="4:00 PM"
				notification="3"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdPuCovwlEDU1DMy_NbYedAXmEMaZaG0o4g&usqp=CAU"
				username="Huan Phan"
				bio="my name is Huan Phan"
				lastMessage="Hello there"
				time="4:00 PM"
				notification="1"
				isBlocked
				isMuted
				hasStory
			/>
			<ConversationItem
				picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdPuCovwlEDU1DMy_NbYedAXmEMaZaG0o4g&usqp=CAU"
				username="Huy Dinh"
				bio="my name is Huy Dinh"
				lastMessage="Hello there"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Hung Nguyen"
				bio="my name is Hung Nguyen"
				lastMessage="Hello there"
				time="4:00 PM"
				isBlocked
				isMuted
			/>
			<ConversationItem
				picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
				username="Son Vo"
				bio="my name is Son Vo"
				lastMessage="Hello there"
				time="4:00 PM"
				notification="5"
				isBlocked
				isMuted
				hasStory
			/>

		</ScrollView>
	)
}

export default Conversations