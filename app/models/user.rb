class User < ActiveRecord::Base

  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :username, :email, presence: true, :uniqueness => {:case_sensitive => false}
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token, :set_default_image

  has_many :recordings,
    foreign_key: :uploader_id
  has_many :favorites
  has_many :favorited_recordings,
    through: :favorites,
    source: :recording
  has_many :comments,
    foreign_key: :author_id

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.ci_find('username', username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def set_default_image
    self.image_url = "https://res.cloudinary.com/record-cloud/image/upload/v1478421823/profile.svg" unless self.image_url
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  end

  def create_reset_digest
    self.reset_digest = SecureRandom::urlsafe_base64
    self.reset_sent_at = Time.zone.now
    self.save
  end

  def password_reset_expired?
    if self.reset_sent_at
      self.reset_sent_at < 2.hours.ago
    else
      true
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.ci_find(field, search)
    User.find_by("lower(#{field}) = lower(?)", search)
  end

  def self.name_to_id(name)
    user = User.ci_find('username', name)
    if user
      return user.id
    else
      return -1
    end
  end

end
