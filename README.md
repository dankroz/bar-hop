# bar-hop - meant for mobile use so if on desktop you will need to change to mobile device mode via DevTools
A scavenger hunt challenge app for adventurous people looking to have fun and find new bars.

Users must sign up for an account to keep track of their score. We use Redux & Passport to manage the authentication. 

Next, we grab the users geolocation to find the closest bar and give them hints to figure out which bar it is. Each bar has two hints, the user can ask for the second hint which will make them lose points. They may give up to get the bar details and head there. 

Once arrived at the location, the user can attain more points by beating challenges. At this point our challenges are based on getting pictures of bar specific items. We use Clarifai API to do image analysis to find if it is the correct item. The user gains points if it is correct. 

You can also checkout the leaderboard to see other users and how they've done. 

Enjoy!
