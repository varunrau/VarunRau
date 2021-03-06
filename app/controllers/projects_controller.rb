class ProjectsController < ApplicationController
  # GET /projects
  # GET /projects.json
  def index

    respond_to do |format|
      format.html # index.html.erb
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @login }
    end
  end

  def create
    @project = Project.new(params[:project])
    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project created' }
      else
        format.html { render action: "new" }
      end
    end
  end
end
