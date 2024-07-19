# Strategy
With multiple agents, handle new and returning Users

## Tactics
- have a Welcome Agent (WA) that is our single point of entry (i.e., Gatekeeper architecture)
- use phone numbers as GUIDs for User(s)
- through prompt engineering, enrich user profile from user's responses
- quickly determine reason person is calling, then route them to specific, separate Agent that specializes in each main app functionality
  - transpo, food, rx
- recognize returning users, have agent prompts/responses account for past conversations and app usage (RAG implementation)

### Steel Thread 

1. inbound calls supported via "welcome agent" (WA)
2. capture incoming phone number 
3. see if new number or existing number (new or returning user)
4. if new user
   - create new User profile, phone # as GUID
   - WA gathers name, age, and location in initial prompt(s)
   - attach name, age, and location to User profile
   - WA attempts to "bucket" user based on their use case: transpo, food, rx (for now) - store as userType or such
     - prompt engineer this stage; rough and straight forward for now
5. if returning user
   - <ToDo v2>
   - e.g., route to appropiate Agent based on userType
     - separate agent for each bucket/use case/user type: transpo, food, rx (for now)
    
#### Extensions
- suggest solutions based on stored used data (e.g., "would you like a car sent to your home to pick you up? {use home address for concierge Uber]'
- allow user to change their User data ("I can update your preferred grocery delivery location if you'd like" {sending to parent if kid calling, or office, w/e})
- support multiple phone numbers for users
- tie numbers/users into "families" i.e., build data relationships between related individuals into group level models
