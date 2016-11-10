# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "guest", password: "password", email: "guest@email.com")
Category.create(name: "Meeting")
Category.create(name: "Music")
Category.create(name: "Lecture")
Category.create(name: "Other")
