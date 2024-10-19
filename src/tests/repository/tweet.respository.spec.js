// first mock our model
const { TweetRepository } = require('../../repository');
const { Tweet } = require('../../models');
jest.mock('../../models/Tweet.model.js');

test('should create a new tweet and return it', async () => {
	const data = {
		content: 'This is a test tweet',
	};
	const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
		return {
			...data,
			createdAt: '2022-02-12',
			updatedAt: '2022-02-12',
		};
	});
	const tweetRepository = new TweetRepository();
	const tweet = await tweetRepository.create(data);
	expect(spy).toHaveBeenCalled();
	expect(tweet.content).toBe(data.content);
});

test('should not create a tweet and throw exception', async () => {
	const data = {
		content: 'This is a test tweet',
	};

	const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
		throw new Error();
	});

    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);

    expect(tweet).rejects.toThrow()

});
