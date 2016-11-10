module HolderJs
  def test_image(width, height)
    # image_tag prefixes 'images/' and breaks holder.js
    "<img data-src=\"holder.js/#{width}x#{height}\">"
  end
end
