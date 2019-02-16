Rails.application.routes.draw do
  root "static_pages#root"

  resources :users, only: [:create] ,defaults: {format: :json}
  resource :session, only: [:create, :destroy]

end
