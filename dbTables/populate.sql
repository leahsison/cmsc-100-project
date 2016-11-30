use onehundredproject

load data local infile 'user.csv'
into table user
fields terminated by ','
lines terminated by '\n';

load data local infile 'newfollow.csv'
into table user_follows_user
fields terminated by ','
lines terminated by '\n';

load data local infile 'newtweet.csv'
into table tweet
fields terminated by ',' optionally enclosed by '\"'
lines terminated by '\n';

load data local infile 'comments.csv'
into table comment
fields terminated by ',' optionally enclosed by '\"'
lines terminated by '\n';

load data local infile 'newlike.csv'
into table tweet_like
fields terminated by ','
lines terminated by '\n';

load data local infile 'newretweet.csv'
into table retweet
fields terminated by ','
lines terminated by '\n';
