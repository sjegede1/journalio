# Journalio App

## Description

This is a daily journal app designed to help you track your daily moods and the activities that may have contributed to these moods.
This app is HEAVILY INSPIRED by The Daylio App

## Technologies and Dependencies
- Firebase 
- Google Charts
- React

## APIs
- Firebase storage
- Firebase Realtime Database

### MVP
- ✅ Create a header with the name of the month, left and right arrows, and a search icon.
- ✅ Create a nav bar at the bottom with 4 pages and a 5th icon in the middle to add a new entry.
- Nav Pages
    - Entries: list of all entries in the journal sorted chronologically
    - Stats: shows stats related to your mood and activities
    - Friends/Notifications: Notifications from friends
    - Profile: Profiles settings, gallery etc
- Other Pages
    - Entry Form: This is the page where we enter and submit new journal entries.
        - <strong>FEATURES:</strong>
            - Animate the card by sliding up from the bottom.
            - Use params to set state when the page loads.
            - 
        - DateTime: input type:datetime-local value:current-time max:EOD today required
        - Mood: radio int values 1-5, The values will be represented by emojis
        - Note: input type:text
        - Activity: Checkbox of all activities that happened that day
        - Add Photo: Add photo from device or take photo
        - Add voice note: Upload voice note.
            - Voice note can be sellected as a highlight which can be shared with friends
    - Search Page: Searches for entries and activities (maybe even friends)
    - Friend's Profile Page:
        - Charts: recent mood history.
        - Highlighted voice notes.
        - Send voice note.


## RESOURCES
1. Daylio App
2. icons website
3. 