# Channels

A lite version of Slack as a single page application. 

## About
Channels is the starting point for a Slack clone. It is built on a Ruby on Rails backend, with a React/Redux frontend. Once signed up or logged in to the application, users can view and join different channels/chat-rooms. If a user is a member of a channel, he/she can send messages in the channel. 

Messages are sent using ActionCable from Rails, meaning new messages will appear automatically without checking for new messages. As of now, channels can only be created and deleted on the backend. 


## Usage & Installation

- Clone and check out this repository.
`https://github.com/dbsasser/channels`

### Backend (Ruby on Rails): 

- Move to backend directory
`cd channels-backend`

- Run `Bundle install`

- Create and seed database. 
Run`rails db:create` and then `rails db:seed`

- Start Rails Server
Run `rails -s`

!! This application currently expects the Rails server to use `http://localhost:3000`  !!


### Frontend (React/Redux):

- Move to frontend directory
`cd channels-frontend`

- Start React server
Run `npm start` and Open [http://localhost:3001](http://localhost:3001) to view in browser.


## License
This project is licensed under the MIT License.