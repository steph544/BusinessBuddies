class Api::V1::UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]
 
    def create
      user = User.new(user_params)
  
      if user.valid?
        user.save
        render json: {user: UserSerializer.new(user)}, status: :created
      else
        render json: {error: "Please try again"}, status: :not_acceptable
      end
    end

    def index 
      @users = User.all
      render json: @users, :include => :children
    end 
  
    private
  
    def user_params
      params.permit(:username, :password, :first_name, :last_name, :email)
    end
  end
  