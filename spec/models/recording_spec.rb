require 'rails_helper'
require 'byebug'

begin
  Recording
rescue
  Recording = nil
end

RSpec.describe Recording, :type => :model do

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:recording_url) }
  it { should validate_presence_of(:uploader_id) }
  it { should validate_presence_of(:category_id) }
  it { should belong_to(:uploader) }
  it { should have_many(:favorites) }
end
