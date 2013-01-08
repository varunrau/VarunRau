class Project < ActiveRecord::Base
  attr_accessible :description, :image, :tech, :name
end
