class AddTechToProject < ActiveRecord::Migration
  def change
    change_table :projects do |t|
      t.string :tech
    end
  end

end
