"""`appengine_config` gets loaded when starting a new application instance."""

# Ensure 3rd-party packages are available.
from google.appengine.ext import vendor
vendor.add('lib')

# Import the endpoints config.
import endpoints_config
