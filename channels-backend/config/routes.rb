Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show_user'
      resources :users do
        resources :channels
      end
      resources :channels do 
        resources :messages
      end
      mount ActionCable.server => '/cable'
    end
  end

end
