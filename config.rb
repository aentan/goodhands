# Used for generating absolute URLs
set :protocol, "http://"
set :host, "goodhands.co"
set :port, 80
helpers do
  def host_with_port
    [host, optional_port].compact.join(':')
  end
  def optional_port
    port unless port.to_i == 80
  end
  def image_url(source)
    protocol + host_with_port + image_path(source)
  end
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
  # Used for generating absolute URLs
  set :host, Middleman::PreviewServer.host
  set :port, Middleman::PreviewServer.port
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

set :layouts_dir, 'layouts'
set :partials_dir, 'shared'

# Pretty URLs
activate :directory_indexes

# Deploy
activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = "custom-remote" # remote name or git url, default: origin
  # deploy.branch   = "custom-branch" # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  deploy.build_before = true # default: false
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify HTML on build
  activate :minify_html

  # Enable cache buster
  activate :asset_hash, :exts => %w(ico manifest jpg png gif js css)

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  # Gzip for faster site
  activate :gzip

  # activate :imageoptim
end
