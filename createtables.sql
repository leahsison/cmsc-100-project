use cmsc100db;

create table USER(
	username varchar(24) primary key,
	email varchar(36),
	password varchar(32),
	name varchar(24)
);

create table USER_FOLLOWS_USER(
	fina_follow varchar(24),
	constraint follows_finafollow_fk foreign key(fina_follow)
		references USER(username) on update cascade,
	followers varchar(24),
	constraint follows_follower_fk foreign key(followers)
		references USER(username) on update cascade
);

create table TWEET(
	tweet_id int not null auto_increment primary key,
	tweet_timestamp timestamp,
	tweet_content varchar(140),
	tweet_author varchar(24),
	constraint tweet_author_fk foreign key(tweet_author)
		references USER(username) on update cascade
);

create table COMMENT(
	comment_id int not null auto_increment primary key,
	comment_content varchar(140),
	comment_author varchar(24),
	constraint comment_commentAuthor_fk foreign key(comment_author)
		references USER(username) on update cascade,
	parent_tweet int not null,
	constraint comment_parentTweet_fk foreign key(parent_tweet)
		references TWEET(tweet_id) on delete cascade
);
create table TWEET_LIKE(
	tweet_id int not null,
	constraint tweetlike_tweetID_fk foreign key(tweet_id)
		references TWEET(tweet_id) on delete cascade,
	tweet_liker varchar(24),
	constraint tweetlike_tweetLiker_fk foreign key (tweet_liker)
		references USER(username) on update cascade
);

create table RETWEET(
	tweet_id int not null,
	constraint retweet_tweetID_fk foreign key(tweet_id)
		references TWEET(tweet_id) on delete cascade,
	retweeter varchar(24),
	constraint retweet_retweeter_fk foreign key(retweeter)
		references USER(username) on update cascade
);