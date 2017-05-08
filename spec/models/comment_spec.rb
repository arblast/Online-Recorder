require 'rails_helper'
require 'byebug'

begin
  Comment
rescue
  Comment = nil
end

RSpec.describe Comment, :type => :model do

  it { should validate_presence_of(:author_id) }
  it { should validate_presence_of(:recording_id) }
  it {should validate_presence_of(:content)}
  it { should belong_to(:author) }
  it { should belong_to(:recording) }
end
