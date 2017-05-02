require 'rails_helper'
require 'byebug'

begin
  Recording
rescue
  Recording = nil
end

RSpec.describe Recording, :type => :model do

  describe "category_name" do
    it "returns the correct category name" do
      Recording.create!(title: "Test", recording_url: "test.com", uploader_id: 1,
      publicity: "public", category_id: 1)
      Category.create!(name: "Meeting")
      recording = Recording.find_by_title("Test")
      expect(recording.category_name).to be("Meeting")
    end

  end


  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:recording_url) }
  it { should validate_presence_of(:uploader_id) }
  it { should validate_presence_of(:category_id) }
  it { should belong_to(:uploader) }
  it { should have_many(:favorites) }
end
