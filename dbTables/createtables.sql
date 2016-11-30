use cmsc100db;

create table user(
	user_id int not null auto_increment primary key,
	username varchar(24) not null,
	email varchar(42) not null,
	password varchar(18) not null,
	name varchar(24) not null
);
create table user_follows_user(
	fina_follow int not null,
	constraint follows_finafollow_fk foreign key(fina_follow)
		references user(user_id)  on delete cascade,
	followers int not null,
	constraint follows_follower_fk foreign key(followers)
		references user(user_id)  on delete cascade
);

create table tweet(
	tweet_id int not null auto_increment primary key,
	tweet_timestamp timestamp,
	tweet_content varchar(140),
	tweet_author int,
	constraint tweet_author_fk foreign key(tweet_author)
		references user(user_id)  on delete cascade
);

create table comment(
	comment_id int not null auto_increment primary key,
	comment_content varchar(140),
	comment_author int,
	constraint comment_commentAuthor_fk foreign key(comment_author)
		references user(user_id) on delete cascade,
	parent_tweet int not null,
	constraint comment_parentTweet_fk foreign key(parent_tweet)
		references tweet(tweet_id) on delete cascade
);
create table tweet_like(
	tweet_id int not null,
	constraint tweetlike_tweetID_fk foreign key(tweet_id)
		references tweet(tweet_id) on delete cascade,
	tweet_liker int not null,
	constraint tweetlike_tweetLiker_fk foreign key (tweet_liker)
		references user(user_id) on delete cascade
);

create table retweet(
	tweet_id int not null,
	constraint retweet_tweetID_fk foreign key(tweet_id)
		references tweet(tweet_id) on delete cascade,
	retweeter_id int not null,
	constraint retweet_retweeter_fk foreign key(retweeter_id)
		references user(user_id)  on delete cascade
);
