Rails.application.routes.draw do
  namespace :api do
    get 'benches/index'
    get 'benches/create'
  end
  get 'benches/index'
  get 'benches/create'
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

end
