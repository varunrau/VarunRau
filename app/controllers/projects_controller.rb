class ProjectsController < ApplicationController
  layout false
  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @projects }
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new

    respond_to do |format|
      format.html
      format.json { render json: @login }
    end
  end
end
