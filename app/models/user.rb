
class User

  include Mongoid::Document

  field :firstname, type: String
  field :lastname, type: String
  field :email, type: String
  field :password, type: String

  validates :firstname, presence: true
  validates :lastname, presence:true
  validates :email, presence:true, uniqueness: true
  validates :password, presence:true




end

