class Recording < ActiveRecord::Base

  validates :title, :recording_url, :uploader_id, :plays, :publicity, :category_id, presence: true
  after_initialize :set_default_image

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User
  belongs_to :category
  has_many :favorites
  has_many :favorited_users,
    through: :favorites,
    source: :user
  has_many :comments


  def set_default_image
    self.image_url = "https://res.cloudinary.com/record-cloud/image/upload/v1478131735/music-note-5_p5oyxj.png" unless self.image_url
  end

  def category_name=(name)
    self.category_id = Category.find_by_name(name).id
  end

  def category_name
    self.category.name
  end

  def num_favorites
    self.favorites.length
  end

  def is_favorite?(user)
    self.favorited_users.to_a.include?(user)
  end

end
