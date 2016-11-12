class Category < ActiveRecord::Base

  validates :name, presence: true

  has_many :recordings

  def self.name_to_id(name)
    category = Category.find_by_name(name.downcase.capitalize)
    if category
      return category.id
    else
      return -1
    end
  end

end
