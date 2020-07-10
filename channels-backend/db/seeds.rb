# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


 User.create(name: 'Daniel Sasser', email: 'daniel@test.com', password: 'password')
 User.create(name: 'Taitum Smith', email: 'taitum@test.com', password: 'password')
 User.create(name: 'Amber Jones', email: 'amber@test.com', password: 'password')
 User.create(name: 'Ellie Moon', email: 'ellie@test.com', password: 'password')
 User.create(name: 'Fletcher Williams', email: 'fletcher@test.com', password: 'password')

 Channel.create(name: 'Main', description: "This is the official main channel of the website.", owner_id: 1)
 Channel.create(name: 'General Coding', description: "For general coding chat.", owner_id: 1)
 Channel.create(name: 'Ruby', description: "Talk about pure Ruby.", owner_id: 1)
 Channel.create(name: 'Ruby on Rails', description: "It's all about convention.", owner_id: 1)
 Channel.create(name: 'Javascript', description: "The wild west of coding.", owner_id: 1)
 Channel.create(name: 'React / Redux', description: "Why isn't this component working?", owner_id: 1)

 daniels_memberships = Membership.create([{user_id: 1, channel_id: 1}, {user_id: 1, channel_id: 2}, {user_id: 1, channel_id: 3}, {user_id: 1, channel_id: 5}])
 taitums_memberships = Membership.create([{user_id: 2, channel_id: 1}, {user_id: 2, channel_id: 4}, {user_id: 2, channel_id: 5}])
 ambers_memberships = Membership.create([{user_id: 3, channel_id: 1}, {user_id: 3, channel_id: 2}, {user_id: 3, channel_id: 3}, {user_id: 3, channel_id: 4}])
 ellies_memberships = Membership.create([{user_id: 4, channel_id: 1}, {user_id: 4, channel_id: 2}, {user_id: 4, channel_id: 4}])
 daniels_memberships = Membership.create(user_id: 5, channel_id: 1)

#  Create random messages with faker 

75.times do 
    Message.create(user_id: Faker::Number.within(range: 1..5), channel_id: Faker::Number.within(range: 1..6), body: Faker::TvShows::TheITCrowd.quote)
end
