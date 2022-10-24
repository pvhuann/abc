import React from "react";
import { ScrollView } from "react-native";
import StoryItem from "./StoryItem";
import AddStoryCard from "./AddStoryCard";

const Stories = () => {
	return (
		<ScrollView>
			<AddStoryCard />
			<StoryItem
				picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
				username="Hung"
				time="3 Hours ago"
				stories={[
					
				]}
			/>
			<StoryItem
				picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
				username="Dung"
				time="3 Hours ago"
				stories={[
					
				]}
			/>
			
		</ScrollView>
	);
};

export default Stories;
