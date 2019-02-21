class Api::BenchesController < ApplicationController
  def index
    @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save!
      render :index
    else
      render json: @bench.errors.full_messages
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description)
  end


end
