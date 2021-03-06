# Moodify
For my senior capstone project, **I created a website called 'Moodify' where a user can get song suggestions
based on what mood they are in currently and what mood they desire to be.**
The website uses Spotify API to pull up tracks for the user. A user has to first log in to their Spotify account(free or premium) so that the website has access to their Spotify data.
The landing page presents the user with 2 drop down lists: one to pick their current mood (Sad, Low Energy, Happy) and their intended mood('Even sadder, Like Dancing, Mellow)

In the backend, I use the [getrecommendations](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/) Spotify API method which generates song suggestions based on different seed parameters.
The query parameters include up to 5 seed_artists, which I get by calling the 'get artists' endpoint.
For determing which songs are recommended,I use the audio features valence and danceability. Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
Valence is a measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. 
Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

For a user who feels like dancing, I pass on a danceability target of 0.9 and a valence target of 0.9 so as to pull up high energy songs. 
For a user who wants to feel 'even sadder', I set the danceability and valence targets to 0.1. Once the songs are rendered on the website the user can play a preview of the song and hopefully get in the mood they were looking for!

## What I learned on this Project
1. This was a solo project, so I had to learn how to be accountable to myself and get work done!
2. I learned ReactJs through a Udemy course I took over the summer. This project pushed me to take the training wheels off and actually implement what I had learned.
3. The benefits of using agile methodologies such as weekly standups,sprints and several releases to pace out work
4. When and how to ask for help. The beauty of software engineering is that you will NEVER know everything you need to know to complete a project.
But, you can leverage your support network and use your problem-solving skills to learn as you go.
5. The value of persistence: At certain points,I was frustrated with my gaps of understanding which made my progress slower. However, this frustration grew my resilience muscles, a key skill any softwaere engineer needs.
I receive such a dopamine hit when my code works! Keeps me coming back for more challenges. 
5. Starting off the project there was a lot of uncertainity about whether I'd be able to complete the project on time.
I had a 21 credit course load, and also working 20 hours part time. My time-management and stress-managegement skills were put to the test. Not only did I successfuly complete this project, 
I achieved a 4.0 GPA,  and excelled at my internship. I am proud of the work that I did, and excited to continue learning and growing!
 


