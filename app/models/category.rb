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

  def self.top10
    recordings = {}
    Category.includes(:recordings).each do |cat|
      sorted = cat.recordings.includes(:favorites, :comments, :uploader).where(publicity: "public").sort {|rec1, rec2| rec1.num_favorites <=> rec2.num_favorites}
      recordings[cat.name] = sorted.first(10)
    end
    recordings
  end

end
