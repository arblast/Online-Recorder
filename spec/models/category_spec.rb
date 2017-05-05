require 'rails_helper'
require 'byebug'

begin
  Category
rescue
  Category = nil
end

RSpec.describe Category, :type => :model do

  it { should validate_presence_of(:name) }
  it { should have_many(:recordings) }
end
