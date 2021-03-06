Rails.application.routes.draw do
  devise_for :users
  root "react_app#home"
  mount ActionCable.server => "/cable"

  namespace :api do
    post "sessions" => "sessions#create"
    get "authentication" => "authentication#index"
    resources :songs do
      collection do
        post "import"
      end
    end
    resources :parties
    resources :cinemas do
      member do
        post "send_message"
        post "join_cinema"
      end
    end

    resources :movies
    resources :players do
      collection do
        post "play"
        post "pause"
        post "seek"
        post "change_song"
        post "change_movie"
      end
    end
    resources :attachments, only: [:create, :destroy]
  end

  get "*path", to: "react_app#home"
end
