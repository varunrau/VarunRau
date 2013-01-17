VarunRau::Application.routes.draw do
  get "about/index"

  get "fbmuseum/index"

  get "rsa/index"

  get "resume/index"

  get "contact/index"

  get "splash/index"

  get "about/index"

  resources :projects

  resources :resume

  root :to => "about", :action => 'index'

  get 'resume' => 'resume#index', :as => 'resume'
end
