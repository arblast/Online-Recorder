require 'rails_helper'
begin
  User
rescue
  User = nil
end

RSpec.describe User, :type => :model do

  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "jack_bruce", password: "abcdef", email: "jack.bruce@email.com")
      user = User.find_by_username("jack_bruce")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "jack_bruce", password: "abcdef")
    end
  end

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should have_many(:recordings) }
  it { should have_many(:favorites) }
  it { should have_many(:comments) }
end
