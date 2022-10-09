import axios from "axios";
import { useEffect, useState } from "react";
import { Tweet } from "react-twitter-widgets";

function ShowTweets() {
	const [TweetIds, setTweetIds] = useState([]);
	useEffect(() => {
		getDataFromAPI();
	}, []);

	function getDataFromAPI() {
		axios.get("https://www.mocky.io/v2/5d1ef97d310000552febe99d").then((res) => {
			let data = extractTweetIds(res.data);
			setTweetIds(data);
			console.log(TweetIds);
		});
  }
  
	function extractTweetIds(Tweet: any) {
		return Tweet.map((tweet: any) => tweet._id.split("/").pop());
	}

	return (
		<div>
			{TweetIds.map((name, i) => (
				<Tweet tweetId={name} key={i} />
			))}
		</div>
	);
}

export default ShowTweets;
