require 'rails_helper'
require 'byebug'

begin
  Favorite
rescue
  Favorite = nil
end

RSpec.describe Favorite, :type => :model do

  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:recording_id) }
  it { should belong_to(:recording) }
  it { should belong_to(:user) }
end
